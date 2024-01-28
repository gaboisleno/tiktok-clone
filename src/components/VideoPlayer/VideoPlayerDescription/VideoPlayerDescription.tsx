import './index.css';

export default function VideoPlayerDescription({ username = '', description = '', track = '' }) {
  return (
    <>
      <div className="video-caption">
        <div className="caption-wrapper">
          <h2 className="video-caption__username">
            <strong>
              <a href={`/user/${username}`}>@{username}</a>
            </strong>
          </h2>

          <h1 className="video-caption__description">
            <div>{description}</div>
          </h1>

          <h2 className="video-caption__music">
            <img src="/assets/note.png" alt="" width={16} height={16} />
            <div className="track">
              <div className="track-anim">
                <span>{track}</span>
                <span>{track}</span>
                <span>{track}</span>
                <span>{track}</span>
              </div>
            </div>
          </h2>
        </div>
      </div>
    </>
  );
}
