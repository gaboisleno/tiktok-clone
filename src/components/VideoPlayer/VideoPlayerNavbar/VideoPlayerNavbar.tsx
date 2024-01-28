import './index.css';
import { useLocation } from 'wouter';

export const VideoPlayerNavbar = () => {
  return (
    <div className="navbar">
      <button onClick={() => useLocation('/upload')}>upload</button>
    </div>
  );
};
