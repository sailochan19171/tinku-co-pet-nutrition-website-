import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase env not set. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to project/.env');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');