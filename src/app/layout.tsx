import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'JJSS – The Junior Journal for STEM Studies',
  description:
    'A youth-led open science platform where learners replicate experiments, publish results, and build a transparent body of knowledge.',
  metadataBase: new URL('https://jjss-app.vercel.app'),
  openGraph: {
    title: 'JJSS – Junior Journal for STEM Studies',
    description:
      'Youth-led open science: learn, replicate, publish.',
    siteName: 'JJSS',
    images: ['/og-default.png'], // put this in /public
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
