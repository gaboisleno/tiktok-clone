import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = `${import.meta.env.VITE_SUPABASE_PROJECT_URL}`;
export const supabaseKey = `${import.meta.env.VITE_SUPABASE_KEY}`;
export const supabaseStorageUrl = `${import.meta.env.VITE_SUPABASE_STORAGE_URL}`;

export const supabase = createClient(supabaseUrl, supabaseKey);
