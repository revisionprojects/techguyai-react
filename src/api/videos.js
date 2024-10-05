import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  try {
    const result = await sql`SELECT * FROM videos;`;
    response.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching videos:', error);
    response.status(500).json({ error: 'Error fetching videos' });
  }
}
