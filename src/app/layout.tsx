import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rolland Studio | Strategy & Technology",
  description: "A premium strategy, design, and development partner connecting bold ideas with world-class execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-black">
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans overflow-x-hidden min-h-screen flex flex-col`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
