import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';

dotenv.config();

async function seedDatabase() {
  try {
    // Step 1: Drop the existing table if it exists
    console.log('Dropping existing videos table...');
    await sql`DROP TABLE IF EXISTS videos;`;

    // Step 2: Create the videos table
    console.log('Creating videos table...');
    await sql`
      CREATE TABLE videos (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        video_id VARCHAR(50) NOT NULL,
        thumbnail VARCHAR(255) NOT NULL
      );
    `;

    // Step 3: Add unique constraint
    console.log('Adding unique constraint on video_id...');
    await sql`ALTER TABLE videos ADD CONSTRAINT videos_video_id_key UNIQUE (video_id);`;

    // Step 4: Insert sample data
    console.log('Inserting sample data...');
    await sql`
      INSERT INTO videos (title, video_id, thumbnail)
      VALUES 
      ('AI in Healthcare', 'abc123', 'https://example.com/thumbnail1.jpg'),
      ('Machine Learning Basics', 'def456', 'https://example.com/thumbnail2.jpg')
      ON CONFLICT (video_id) DO NOTHING;
    `;

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    console.error('Error details:', error.message);
  }
}

seedDatabase();
