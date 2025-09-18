import { sendEmail, getFrom } from '../utils/mailer.js';
import Subscription from '../models/Subscription.js';

// Live marketing series using Resend (fallback to SMTP)
export const SERIES = {
  welcome: {
    subject: '🐾 Welcome to a Cleaner Home for Your Pets!',
    html: `
      <h2>Welcome to Tinku & Co.</h2>
      <p>Thanks for subscribing! Meet our pet-safe, natural floor cleaner.</p>
      <p><strong>Use code CLEANPET20</strong> for 20% off your first purchase.</p>
    `,
  },
  educational: {
    subject: 'Why Regular Cleanups Keep Your Pets Healthy 🐶🐱',
    html: `
      <h2>Healthy Pets, Cleaner Floors</h2>
      <p>Tips about pet hygiene and safe cleaning. Why many regular cleaners can be harsh and unsafe.</p>
      <p><a href="https://your-domain.example/blog">Read our blog</a> or <a href="https://your-domain.example">see our natural solution</a>.</p>
    `,
  },
  showcase: {
    subject: '✨ The Cleaner Your Pets Deserve',
    html: `
      <h2>Product Highlights</h2>
      <ul>
        <li>Eco-friendly, pet-safe</li>
        <li>Before/After results</li>
      </ul>
      <p><a href="https://your-domain.example/#product">Shop Now</a></p>
    `,
  },
  socialProof: {
    subject: 'See How Other Pet Parents Are Loving This 🐾',
    html: `
      <h2>What Customers Say</h2>
      <p>★★★★★ — “No more lingering odors, and safe on paws!”</p>
      <p><a href="https://your-domain.example/#testimonials">Join the clean-pet family</a></p>
    `,
  },
  offer: {
    subject: 'Limited Offer: 20% Off Pet Floor Cleaner Today!',
    html: `
      <h2>Exclusive offer</h2>
      <p>Seasonal promotions and subscriber-only discounts.</p>
    `,
  },
  tips: {
    subject: '3 Simple Tricks for a Pet-Friendly Clean Home',
    html: `
      <h2>Cleaning Hacks</h2>
      <p>Regular tips and pet care guides.</p>
    `,
  },
  reengage: {
    subject: 'We Miss You! Here’s 15% Off to Come Back 🐕',
    html: `
      <h2>Come Back</h2>
      <p>We’d love to see you again. Here’s 15% off your next order.</p>
    `,
  },
} as const;

export async function sendSubscriptionSeries(to: string) {
  const from = getFrom();
  // Send only welcome immediately here; rest are scheduled via scheduler
  await sendEmail({ from, to, subject: SERIES.welcome.subject, html: SERIES.welcome.html });
}

// Simple in-process scheduler (cron-like). In production, move to a job queue / cron service.
export async function runEmailScheduler() {
  const now = new Date();

  // EDUCATIONAL (Day 2–3)
  const educationalCutoff = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
  const eduBatch = await Subscription.find({ sentWelcome: true, sentEducational: false, consentAt: { $lte: educationalCutoff } }).limit(100);
  for (const sub of eduBatch) {
    await sendEmail({ to: sub.email, subject: SERIES.educational.subject, html: SERIES.educational.html });
    sub.sentEducational = true;
    await sub.save();
  }

  // SHOWCASE (End of Week 1)
  const showcaseCutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const showcaseBatch = await Subscription.find({ sentEducational: true, sentShowcase: false, consentAt: { $lte: showcaseCutoff } }).limit(100);
  for (const sub of showcaseBatch) {
    await sendEmail({ to: sub.email, subject: SERIES.showcase.subject, html: SERIES.showcase.html });
    sub.sentShowcase = true;
    await sub.save();
  }

  // SOCIAL PROOF (Week 2)
  const socialProofCutoff = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
  const socialBatch = await Subscription.find({ sentShowcase: true, sentSocialProof: false, consentAt: { $lte: socialProofCutoff } }).limit(100);
  for (const sub of socialBatch) {
    await sendEmail({ to: sub.email, subject: SERIES.socialProof.subject, html: SERIES.socialProof.html });
    sub.sentSocialProof = true;
    await sub.save();
  }

  // OFFER (Ongoing — send once after Week 3)
  const offerCutoff = new Date(now.getTime() - 21 * 24 * 60 * 60 * 1000);
  const offerBatch = await Subscription.find({ sentSocialProof: true, sentOffer: false, consentAt: { $lte: offerCutoff } }).limit(100);
  for (const sub of offerBatch) {
    await sendEmail({ to: sub.email, subject: SERIES.offer.subject, html: SERIES.offer.html });
    sub.sentOffer = true;
    await sub.save();
  }

  // TIPS & ENGAGEMENT (monthly)
  const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const tipsBatch = await Subscription.find({ $or: [ { lastTipsAt: null }, { lastTipsAt: { $lte: monthAgo } } ] }).limit(200);
  for (const sub of tipsBatch) {
    await sendEmail({ to: sub.email, subject: SERIES.tips.subject, html: SERIES.tips.html });
    sub.lastTipsAt = now;
    await sub.save();
  }

  // RE-ENGAGEMENT (inactive flag based)
  const inactiveBatch = await Subscription.find({ inactiveSince: { $ne: null } }).limit(100);
  for (const sub of inactiveBatch) {
    await sendEmail({ to: sub.email, subject: SERIES.reengage.subject, html: SERIES.reengage.html });
    // keep flag; next scheduler can decide cadence
  }
}