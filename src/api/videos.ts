import fetch from 'node-fetch';

import axios from 'axios';

interface Video {
  id: number;  // or string
  title: string;
  // Add other properties
}

export async function fetchVideos(): Promise<Video[]> {
  console.log('Fetching videos from API');
  
  try {
    const response = await fetch('/api/videos');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched videos:', data);
    return data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
}