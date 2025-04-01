import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Load fonts with CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "HYPOSIZE - Portfolio",
  description: "Powered by Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${firaMono.variable} ${outfit.variable}`}
    >
      <body className="antialiased bg-[#FFFFFF] text-gray-900">
        <div className="flex flex-col gap-4 w-full min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
