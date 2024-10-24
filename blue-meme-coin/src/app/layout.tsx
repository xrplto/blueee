import React from 'react';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "XRPL BLUE",
  description: "The cutest meme coin on the XRP Ledger!",
  icons: {
    icon: '/xrpl-blue.png',
  },
  openGraph: {
    images: [
      {
        url: '/blue-logo.png',
        width: 1200,
        height: 630,
        alt: 'XRPL BLUE Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/blue-logo.png'],
  },
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
