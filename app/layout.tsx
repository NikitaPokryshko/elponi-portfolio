import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"

import StarsCanvas from "./components/main/StarsCanvas"
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elponi.com | Web Applications Design & Development ",
  description: "Elponi.com | Portfolio | Web applications | Next.js | React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
