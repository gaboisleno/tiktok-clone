import { useEffect, useState } from 'react';
import { getVideos } from '../../services/VideosService';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import styles from './styles.module.css';

export default function FeedVideos() {
  const [videos, setVideos] = useState<any[]>(Array());
  useEffect(() => {
    getVideos().then(([videos, error]) => {
      if (!error && Array.isArray(videos)) {
        setVideos(videos);
      }
    });
  }, []);

  return (
    <section>
      {videos.map((video: any) => {
        return (
          <div key={video.id} className={styles.item}>
            <VideoPlayer {...video}></VideoPlayer>
          </div>
        );
      })}
    </section>
  );
}
