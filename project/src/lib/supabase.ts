import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || supabaseUrl === 'your-project-url') {
  throw new Error(
    'Please set VITE_SUPABASE_URL environment variable to your Supabase project URL'
  );
}

if (!supabaseAnonKey || supabaseAnonKey === 'your-anon-key') {
  throw new Error(
    'Please set VITE_SUPABASE_ANON_KEY environment variable to your Supabase anon key'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);