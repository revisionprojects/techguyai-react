import { FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player/lazy';

interface VideoModalProps {
  videoId: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoId, onClose }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="video-container">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            config={{
              youtube: {
                playerVars: { origin: window.location.origin }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
