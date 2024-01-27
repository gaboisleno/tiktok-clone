import { useRef, useState } from 'react';
import { clsx } from 'clsx';
import './index.css';

import VideoPlayerActions from './VideoPlayerActions/VideoPlayerActions';
import VideoPlayerDescription from './VideoPlayerDescription/VideoPlayerDescription';

export default function VideoPlayer(params: any) {
  const [playing, setPlaying] = useState(false);
  const video: any = useRef();

  const handlePlay = () => {
    playing ? video.current.pause() : video.current.play();
    setPlaying(!playing);
  };

  const PlayerClassName = clsx('player', {
    ['hidden']: playing,
  });

  return (
    <div onClick={handlePlay} className="video-wrapper">
      <video className="video" ref={video} src={params.src} controls={false} loop></video>
      <button className={PlayerClassName} />
      <VideoPlayerActions likes={params.likes} shares={params.shares} comments={params.comments} />
      <VideoPlayerDescription description={params.description} author={params.author} track={params.track} />
    </div>
  );
}
