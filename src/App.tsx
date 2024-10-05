import React, { useState, useEffect } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import { FaArrowUp } from 'react-icons/fa';
import { useCookies } from './hooks/useCookies';

// AI-related YouTube videos
const videos = [
  { id: '1', title: 'AI: Artificial Intelligence, Explained', thumbnail: 'https://img.youtube.com/vi/oV74Najm6Nc/maxresdefault.jpg', videoId: 'oV74Najm6Nc' },
  { id: '2', title: 'The Age of AI: Artificial Intelligence, the Future of Humankind', thumbnail: 'https://img.youtube.com/vi/5J5bDQHQR1g/maxresdefault.jpg', videoId: '5J5bDQHQR1g' },
  { id: '3', title: 'Artificial Intelligence: Mankind\'s Last Invention', thumbnail: 'https://img.youtube.com/vi/Pls_q2aQzHg/maxresdefault.jpg', videoId: 'Pls_q2aQzHg' },
  { id: '4', title: 'The Future of Artificial Intelligence', thumbnail: 'https://img.youtube.com/vi/uawLjkSI7Mo/maxresdefault.jpg', videoId: 'uawLjkSI7Mo' },
  { id: '5', title: 'How AI is Changing the World', thumbnail: 'https://img.youtube.com/vi/O5xeyoRL95U/maxresdefault.jpg', videoId: 'O5xeyoRL95U' },
  { id: '6', title: 'The Ethics of Artificial Intelligence', thumbnail: 'https://img.youtube.com/vi/3oYBZU5GCzA/maxresdefault.jpg', videoId: '3oYBZU5GCzA' },
  { id: '7', title: 'AI and the Future of Jobs', thumbnail: 'https://img.youtube.com/vi/v95GjbzB5Zk/maxresdefault.jpg', videoId: 'v95GjbzB5Zk' },
  { id: '8', title: 'Machine Learning: Living in the Age of AI', thumbnail: 'https://img.youtube.com/vi/ZJixNvx9BAc/maxresdefault.jpg', videoId: 'ZJixNvx9BAc' },
];

function App() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { setCookie, getCookie } = useCookies();

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
    // Save dark mode preference in a cookie
    setCookie('darkMode', (!isDarkMode).toString(), { expires: 365 });
  };

  // Load dark mode preference from cookie on initial render
  useEffect(() => {
    const darkModePref = getCookie('darkMode');
    if (darkModePref === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, [getCookie]);

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