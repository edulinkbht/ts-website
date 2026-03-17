import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EduLink Landing Page',
  description: 'Empowering Youth and Education',
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
