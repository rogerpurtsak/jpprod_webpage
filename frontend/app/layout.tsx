import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "JP PROD - Video Production Company",
  description: "Creating visual stories that matter. Professional video production services for commercials, documentaries, corporate videos, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#020203] text-[#EDEDEF]`}>
        {children}
      </body>
    </html>
  );
}
