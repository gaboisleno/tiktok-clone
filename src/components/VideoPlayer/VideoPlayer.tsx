import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import VideoPlayerActions from './VideoPlayerActions/VideoPlayerActions';
import VideoPlayerDescription from './VideoPlayerDescription/VideoPlayerDescription';
import useIntersectionVideo from '../../hooks/useIntersectionVideo';
import { supabaseStorageUrl } from '../../services/supabase';
import './index.css';

export default function VideoPlayer(params: any) {
  const videoRef: any = useRef(null);
  const isOnScreen = useIntersectionVideo(videoRef);
  const [playing, setPlaying] = useState(false);

  const PlayerClassName = clsx('player', {
    ['hidden']: playing,
  });

  const handlePlay = () => {
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  const handleIsOnScreen = (val: boolean) => {
    val ? videoRef.current.play() : videoRef.current.pause();
    setPlaying(val);
  };

  useEffect(() => {
    handleIsOnScreen(isOnScreen);
  }, [isOnScreen]);

  return (
    <div className="video-wrapper">
      <video
        muted={true}
        className="video"
        ref={videoRef}
        src={`${supabaseStorageUrl}/${params.src}`}
        controls={false}
        loop
        onClick={handlePlay}
      ></video>
      <button className={PlayerClassName} />
      <VideoPlayerActions
        likes={params.likes}
        shares={params.shares}
        comments={params.comments}
        avatar={params.users.avatar}
      />
      <VideoPlayerDescription description={params.description} username={params.users.username} track={params.song} />
    </div>
  );
}
