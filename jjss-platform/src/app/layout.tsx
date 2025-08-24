import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "JJSS - Junior Journal for STEM Studies",
  description: "A platform for junior researchers in STEM fields",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}