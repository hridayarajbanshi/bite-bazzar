import type { Metadata } from "next";
import "./globals.css";




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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
