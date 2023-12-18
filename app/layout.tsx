import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/common/NavBar';

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
