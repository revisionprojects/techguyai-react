import React from 'react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  onOpen: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, onOpen }) => {
  return (
    <div className="video-card" onClick={onOpen}>
      <img src={thumbnail} alt={title} />
      <div className="video-card-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
