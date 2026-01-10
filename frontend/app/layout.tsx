import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
