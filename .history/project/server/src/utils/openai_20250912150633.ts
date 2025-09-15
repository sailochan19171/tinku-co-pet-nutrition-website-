import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;
export const openai = apiKey ? new OpenAI({ apiKey }) : null;

export async function generateNarrative(prompt: string): Promise<string> {
  if (!openai) return '';
  const resp = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You write concise, safety-conscious meal plan summaries for pet owners.' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.6,
    max_tokens: 300
  });
  return resp.choices?.[0]?.message?.content ?? '';
}