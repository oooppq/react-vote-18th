import type { Metadata, Viewport } from 'next';
import './globals.css';
import NavBar from '@/components/nav/NavBar';

export const viewport: Viewport = {
  width: 'device-width',
  maximumScale: 1,
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Sniff Vote',
  description: '스니프팀의 투표 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
