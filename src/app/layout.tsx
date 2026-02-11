import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Apple (Indonesia)",
  description: "Apple (Indonesia)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased bg-white dark:bg-black">
        <Navbar />
        <main className="pt-11">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
