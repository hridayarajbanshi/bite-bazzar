import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Poppins} from 'next/font/google';
import Footer from "@/components/Footer";


const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});
export const metadata: Metadata = {
  title: "Techcart - Your Tech Shopping Companion",
  description: "Discover the best tech deals, reviews, and buying guides with Techcart. Your ultimate destination for all things technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      
      <body>
  <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
