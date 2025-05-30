import { createClient } from '@supabase/supabase-js';
export const supabaseKey = import.meta.env.VITE_API_KEY;

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

 const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase