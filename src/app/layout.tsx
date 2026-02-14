import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "../components/ChatWidget";
// 1. Import the new component

export const metadata: Metadata = {
  title: "Alex's AI Portfolio",
  description: "Cost-aware AI research project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        
        {/* 2. Add the Widget here, so it floats above everything */}
        <ChatWidget />
      </body>
    </html>
  );
}