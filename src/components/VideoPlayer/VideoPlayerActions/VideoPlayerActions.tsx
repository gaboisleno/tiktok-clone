import { useLocation } from 'wouter';
import { Heart, Comment, Foward } from '../../Icons/index';
import './index.css';

export default function VideoPlayerActions({
  likes = 12,
  comments = 12,
  shares = 12,
  hearted = false,
  avatar = '',
}: any) {
  const [location, setLocation] = useLocation();

  const handleProfile = () => {
    setLocation('/upload');
  };
  const handleLike = () => {
    window.alert('like');
  };
  const handleShare = () => {
    window.alert('share');
  };
  const handleComment = () => {
    window.alert('comment');
  };

  return (
    <aside className="actions">
      <div className="profile" onClick={handleProfile}>
        <img src={avatar} alt="" className="avatar" />
        <img src="assets/add.png" alt="" className="follow" />
      </div>

      <button className="action" onClick={handleLike}>
        <Heart />
        <span title="likes">{likes}</span>
      </button>

      <button className="action" onClick={handleComment}>
        <Comment />
        <span title="comments">{comments}</span>
      </button>

      <button className="action share" onClick={handleShare}>
        <Foward />
        <span title="shares">{shares}</span>
      </button>

      <button className="action album">
        <img alt="album" src="https://unavatar.io/gabboisleno" />
      </button>
    </aside>
  );
}
