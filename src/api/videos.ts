import fetch from 'node-fetch';

import axios from 'axios';

interface Video {
  id: number;  // or string
  title: string;
  // Add other properties
}

export async function fetchVideos(): Promise<Video[]> {
  try {
    const response = await axios.get<Video[]>(`${process.env.REACT_APP_API_URL}/videos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
}