// Without a .env file the app falls back to the local backend address.
export const env = {
  apiUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:8000',
} as const;
