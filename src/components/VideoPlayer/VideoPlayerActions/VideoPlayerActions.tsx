import { Heart, Comment, Foward } from '../../Icons/index';
import './index.css';

export default function VideoPlayerActions({ likes = 12, comments = 12, shares = 12, hearted = false }: any) {
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
      <button className="action" onClick={handleLike}>
        <Heart />
        <span title="likes">{likes}</span>
      </button>

      <button className="action" onClick={handleComment}>
        <Comment />
        <span title="comments">{comments}</span>
      </button>

      <button className="action" onClick={handleShare}>
        <Foward />
        <span title="shares">{shares}</span>
      </button>
    </aside>
  );
}
