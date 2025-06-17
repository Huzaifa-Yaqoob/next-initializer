import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

//code files
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Title',
  description: 'Write description here',
};

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-muted-foreground antialiased`}
      >
        <div className={'bg-background flex min-h-svh flex-col'}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
