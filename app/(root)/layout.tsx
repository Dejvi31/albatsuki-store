import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albatsuki Store",
  description:
    "Anime Store ne Shqiperi, ketu mund te gjeni te gjitha produkte ne lidhje me anime duke perfshire: figurina, cosplay, chibi, veshje, aksesore etj. ALBATSUKI eshte vendi i duhur per cdo fans Anime",
  keywords:
    "Albatsuki, anime store Albania, anime merchandise Albania, cosplay, anime figurines, anime clothing, dragon ball, naruto, one piece, anime shqip, anime store ne shqiperi, anime merchandise, anime merch, sferat e dragoit, one piece, dragon ball, naruto",
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
