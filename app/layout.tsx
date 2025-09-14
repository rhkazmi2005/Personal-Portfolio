import Home from "./components/home";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reza - Portfolio",
  description: "Personal portfolio showcasing my projects, skills, and experience as a developer",
  keywords: ["portfolio", "developer", "web development", "react", "nextjs", "typescript"],
  authors: [{ name: "Reza" }],
  openGraph: {
    title: "Reza - Portfolio",
    description: "Personal portfolio showcasing my projects, skills, and experience as a developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
