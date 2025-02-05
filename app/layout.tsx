import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Yassine Bibi",
  description: "Portfolio of Yassine Bibi - Software Developer",
  icons: {
    icon: '/YBIconWhite.png',
    shortcut: '/YBIconWhite.png',
   
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="business">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
