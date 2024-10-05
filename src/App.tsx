import { useState, useEffect } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import { FaArrowUp } from 'react-icons/fa';

// AI-related YouTube videos
const videos = [
  { id: '1', title: 'AI: Artificial Intelligence, Explained', thumbnail: 'https://img.youtube.com/vi/oV74Najm6Nc/maxresdefault.jpg', videoId: 'oV74Najm6Nc' },
  { id: '2', title: 'The Age of AI: Artificial Intelligence, the Future of Humankind', thumbnail: 'https://img.youtube.com/vi/5J5bDQHQR1g/maxresdefault.jpg', videoId: '5J5bDQHQR1g' },
  { id: '3', title: 'Artificial Intelligence: Mankind\'s Last Invention', thumbnail: 'https://img.youtube.com/vi/Pls_q2aQzHg/maxresdefault.jpg', videoId: 'Pls_q2aQzHg' },
  { id: '4', title: 'The Future of Artificial Intelligence', thumbnail: 'https://img.youtube.com/vi/uawLjkSI7Mo/maxresdefault.jpg', videoId: 'uawLjkSI7Mo' },
];

function App() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <TopBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to AI Future</h1>
          <p>Explore the possibilities of artificial intelligence</p>
        </div>
        <div className="hero-video-gallery">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              onOpen={() => setSelectedVideo(video.videoId)}
            />
          ))}
        </div>
      </div>
      {selectedVideo && (
        <VideoModal
          videoId={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
      {showTopBtn && (
        <button className="top-btn" onClick={goToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;