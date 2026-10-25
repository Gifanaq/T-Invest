import type { ReactNode } from 'react';

interface AppProvidersProps {
  children: ReactNode;
}

// Global providers (theme, query client, auth, etc.) are added here.
export function AppProviders({ children }: AppProvidersProps) {
  return <>{children}</>;
}
