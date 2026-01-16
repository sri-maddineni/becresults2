import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BEC RESULTS | iTKonnects - Bapatla Engineering College Results Portal",
  description: "Easily check your Bapatla Engineering College results online. Quick and responsive portal for BEC students. Find all your BEC exam results, semester results, and student marks at one place.",
  keywords: [
    "Bapatla Engineering College results",
    "BEC results",
    "Bec 1st year results",
    "Bec student marks",
    "bec bapatla results",
    "bec supply results",
    "BEC results 2024",
    "BEC exam results",
    "Bapatla Engineering College exam results",
    "BEC student portal",
    "BEC results online",
    "Bapatla Engineering College online results",
    "Check BEC results",
    "Bapatla Engineering College marks",
    "BEC academic results",
    "Bapatla Engineering College semester results",
    "BEC results portal",
    "BEC results by roll number",
  ],
  authors: [{ name: "iTKonnects" }],
  openGraph: {
    title: "BEC RESULTS | iTKonnects",
    description: "Find all your Bapatla Engineering College results at one place",
    type: "website",
    url: "https://becresults.itkonnects.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
