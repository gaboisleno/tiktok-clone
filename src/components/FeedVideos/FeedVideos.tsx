import VideoPlayer from '../VideoPlayer/VideoPlayer';
import './index.css';

const VIDEOS = [
  {
    id: 1,
    author: 'GaboIsleno',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    likes: 23,
    shares: 7,
    comments: 2,
    albumCover: '',
    track: 'sonido original- Rosinagh',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
  },
  {
    id: 2,
    author: 'Robert',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    likes: 15,
    shares: 19,
    comments: 8,
    albumCover: '',
    track: 'sonido original- Rosinagh',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
  },
];

export default function FeedVideos() {
  return (
    <section>
      {VIDEOS.map((video) => {
        return (
          <div key={video.id} className="item">
            <VideoPlayer {...video}></VideoPlayer>
          </div>
        );
      })}
    </section>
  );
}
