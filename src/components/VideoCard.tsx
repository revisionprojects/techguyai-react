interface VideoCardProps {
  title: string;
  thumbnail: string;
  onOpen: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, onOpen }) => {
  return (
    <div className="video-card" onClick={onOpen}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default VideoCard;
