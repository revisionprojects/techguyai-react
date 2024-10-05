import React from 'react';
import ReactPlayer from 'react-player';

interface VideoModalProps {
  videoId: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoId, onClose }) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="video-container">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            width="100%"
            height="100%"
            controls={true}
            config={{
              youtube: {
                playerVars: {
                  origin: origin,
                  enablejsapi: 1
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
