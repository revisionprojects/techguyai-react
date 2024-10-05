import { VercelRequest, VercelResponse } from '@vercel/node';
import { query } from '../src/utils/db';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const result = await query('SELECT * FROM videos');
    return response.status(200).json({ videos: result.rows });
  } catch (error) {
    console.error('Error in videos API:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}
