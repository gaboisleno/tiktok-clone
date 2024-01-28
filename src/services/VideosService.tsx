import { createClient } from '@supabase/supabase-js';

const supabaseUrl = `${import.meta.env.VITE_SUPABASE_PROJECT_URL}`;
const supabaseKey = `${import.meta.env.VITE_SUPABASE_KEY}`;

const supabase = createClient(supabaseUrl, supabaseKey);

export const getVideos = async () => {
  let { data, error } = await supabase.from('videos').select(`*, users(username, avatar)`);
  return [data, error];
};
