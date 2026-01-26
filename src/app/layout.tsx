import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Olga Vasilevsky — AI Artist Portfolio",
  description: "Selected works: photography-inspired AI visuals, portraits, and video studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
