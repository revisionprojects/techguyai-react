import React, { useState, useEffect } from 'react';
import { fetchVideos } from '../api/videos';

interface Video {
  id: number;  // or string
  title: string;
  // Add other properties
}

function VideoGallery() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function loadVideos() {
      try {
        const data = await fetchVideos();
        setVideos(data);
      } catch (error) {
        console.error('Failed to load videos:', error);
      }
    }
    loadVideos();
  }, []);

  return (
    <div>
      {videos.map((video: Video) => (
        <div key={video.id}>{video.title}</div>
      ))}
    </div>
  );
}

export default VideoGallery;
