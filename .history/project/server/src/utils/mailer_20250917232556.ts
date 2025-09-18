import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// Mailer supports Resend (preferred) with default domain, falling back to SMTP.
// Configure in server/.env:
// RESEND_API_KEY (preferred)
// MAIL_FROM, MAIL_FROM_NAME (optional) — if not provided with Resend, uses onboarding@resend.dev
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (fallback)

export function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for others
    auth: { user, pass },
  });
}

export function getFrom() {
  const fromEmail = process.env.MAIL_FROM || 'onboarding@resend.dev';
  const fromName = process.env.MAIL_FROM_NAME || 'Tinku & Co.';
  return `${fromName} <${fromEmail}>`;
}

export async function sendEmail(opts: { to: string; subject: string; html: string; from?: string }) {
  const from = opts.from || getFrom();
  const { to, subject, html } = opts;

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    // Use Resend with default domain if custom MAIL_FROM is not set
    const resend = new Resend(resendKey);
    await resend.emails.send({ from, to, subject, html });
    return;
  }

  // Fallback to SMTP if Resend is not configured
  const transporter = createTransport();
  await transporter.sendMail({ from, to, subject, html });
}