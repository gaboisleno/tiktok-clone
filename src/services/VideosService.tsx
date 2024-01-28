import { supabase } from './supabase';

export const getVideos = async () => {
  let { data, error } = await supabase
    .from('videos')
    .select(`*, users(username, avatar)`)
    .order('created_at', { ascending: false });
  return [data, error];
};

export const publishFeed = async (feed: any) => {
  const { data, error } = await supabase
    .from('videos')
    .insert([
      {
        description: feed.description,
        src: `${feed.src}`,
        user_id: feed.user_id,
      },
    ])
    .select();
  return [data, error];
};

export const uploadVideo = async ({ file }: any) => {
  const filename = self.crypto.randomUUID();
  const { data, error } = await supabase.storage.from('videos').upload(`${filename}`, file);
  return [data, error];
};
