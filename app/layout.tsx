import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TechinSol Tools',
  description: 'Plugins, themes and tools built by TechinSol to supercharge your workflow.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
