// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'YOUR_SUPABASE_URL';
// const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

// export const supabase = createClient(supabaseUrl, supabaseKey);

export const supabase = {
  auth: {
    signInWithPassword: async () => ({ error: null }),
    signUp: async () => ({ error: null }),
    signOut: async () => {},
    getSession: async () => ({ data: { session: null } }),
  }
}