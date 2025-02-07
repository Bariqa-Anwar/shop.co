import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import {ClerkProvider} from "@clerk/nextjs"
import { WishlistProvider } from "@/context/WishlistContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop.co",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <WishlistProvider>
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children} 
      <Footer/></body>
    </html>
    </WishlistProvider>
    </ClerkProvider>
  );
}
