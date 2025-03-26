import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './app/features/**/schema.ts',
  dialect: 'postgresql',
  out: './app/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
