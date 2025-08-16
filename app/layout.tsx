import type { Metadata } from "next";
import { Geist_Mono, Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiirhub.example"),
  title: {
    default: "AIIRHub — Your Company’s Own LLM",
    template: "%s — AIIRHub",
  },
  description:
    "A secure, on‑brand AI model trained exclusively on your company’s documents — by IR professionals.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "AIIRHub — Your Company’s Own LLM",
    description:
      "A secure, on‑brand AI model trained exclusively on your company’s documents — trained by IR professionals.",
    url: "https://aiirhub.example",
    siteName: "AIIRHub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIIRHub — Your Company’s Own LLM",
    description:
      "A secure, on‑brand AI model trained exclusively on your company’s documents — trained by IR professionals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
