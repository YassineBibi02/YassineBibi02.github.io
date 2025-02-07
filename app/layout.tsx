import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Footer from "./components/footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yassine Bibi - Resume",
  description: "Portfolio of Yassine Bibi - Software Developer",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/YBlogoBlack.png",
        href: "/images/YBlogoBlack.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/YBlogoWhite.png",
        href: "/images/YBlogoWhite.png",
      },
    ],
    shortcut: "/images/YBlogoWhite.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="business">
      <body className={`${roboto.className} antialiased`}>
        <div className="fixed top-0 left-0 w-full z-20">
          <Header />
        </div>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
