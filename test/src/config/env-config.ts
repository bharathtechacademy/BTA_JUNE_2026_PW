import dotenv from 'dotenv';
import path from 'path';

// Get the environment from process.env (default to dev)
const environment = process.env.ENV || 'dev';

// Resolve directory of the environment file
const envFilePath = path.resolve(process.cwd(), `.env.${environment}`);

// Configure dotenv
dotenv.config({ path: envFilePath });

export const Config = {
  env: environment,
  baseUrl: process.env.BASE_URL || 'https://demo.playwright.dev/todomvc',
  apiBaseUrl: process.env.API_BASE_URL || 'https://reqres.in/api',
  defaultUser: process.env.DEFAULT_USER || 'sample_user@example.com',
  defaultPassword: process.env.DEFAULT_PASSWORD || 'Password123',
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    user: process.env.DB_USER || 'db_user',
    password: process.env.DB_PASSWORD || 'db_pass',
    name: process.env.DB_NAME || 'test_db',
  }
};
