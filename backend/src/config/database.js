import pg from "pg";
import dotenv from 'dotenv';

dotenv.config()

const pool = new pg.Pool({
  host: process.env.DB_HOST,
  port: process.env.PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const query = (text, params) => pool.query(text, params)