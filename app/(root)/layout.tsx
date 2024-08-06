import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albatsuki Store",
  description: "Albatsuki Ecommerce Store",
  keywords:
    "Albatsuki, anime store Albania, anime merchandise Albania, cosplay, anime figurines, anime clothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
