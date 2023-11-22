import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
