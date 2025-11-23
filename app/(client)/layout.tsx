import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";


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
    <ClerkProvider>
  
  <Navbar />
        {children}
        <Footer/>
    
    </ClerkProvider>
  );
}
