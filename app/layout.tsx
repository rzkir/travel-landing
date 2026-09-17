import type { Metadata } from "next";

import { Fraunces, Sora } from "next/font/google";

import SmoothScroll from "@/components/providers/smooth-scroll";

import Header from "@/layout/header";

import Footer from "@/layout/footer";

import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Advenza — Embrace the Wild Essence of Indonesia",
  description:
    "Uncover breathtaking destinations, craft your ideal journey, and experience the magic of Indonesia through curated travel experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-background">
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
