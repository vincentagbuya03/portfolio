import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vincent.dev | Full-Stack Developer Portfolio",
  description:
    "Full-Stack Developer & Creative Technologist. Building digital experiences through clean code and creative logic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
