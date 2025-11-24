import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { Analytics } from "@vercel/analytics/next"

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
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23000'/><text x='16' y='22' font-family='Arial' font-size='18' font-weight='bold' fill='%23ef4444' text-anchor='middle'>RK</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
