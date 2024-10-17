
// 'use client';
import "./globals.css";
import Footer from "./components/Footer";
import Main from "@/app/components/Main";
import Header from "@/app/components/header";

// import {inter} from 'next/font/google';

// const inter = inter({ subsets : ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
