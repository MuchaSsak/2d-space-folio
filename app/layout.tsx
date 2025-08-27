import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import emailjs from "@emailjs/browser";

import "@/app/globals.css";
import { cn } from "@/lib/utils";
import {
  EMAILJS_PUBLIC_KEY,
  GITHUB_PROFILE_URL,
  WEBSITE_URL,
} from "@/lib/constants";
import StarsBackground from "@/canvas/StarsBackground";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mateusz Muszarski | 2D Space Portfolio",
  description: "2D Space Portfolio of Mateusz Muszarski built in Next.js",
  keywords: [
    "space",
    "portfolio",
    "mateusz",
    "muszarski",
    "nextjs",
    "react",
    "motion",
    "webm",
    "2D",
    "typescript",
    "developer",
    "freelance",
    "software",
    "engineer",
    "frontend",
    "backend",
    "fullstack",
    "creative",
    "programming",
  ],
  authors: [{ name: "Mateusz Muszarski", url: GITHUB_PROFILE_URL }],
  creator: "Mateusz Muszarski",
  applicationName: "Mateusz Muszarski | 2D Space Portfolio",
  generator: "Next.js",
  robots: "index, follow",
  metadataBase: new URL(WEBSITE_URL),
  openGraph: {
    title: "Mateusz Muszarski | 2D Space Portfolio",
    description:
      "My name is Mateusz Muszarski and I am a fullstack & creative web developer and this is my 2D animated portfolio themed about space.",
    url: WEBSITE_URL,
    siteName: "Mateusz Muszarski | 2D Space Portfolio",
    images: [
      {
        url: `${WEBSITE_URL}/static/images/projects/space-portfolio.png`,
        width: 1200,
        height: 630,
        alt: "Mateusz Muszarski | 2D Space Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize EmailJS
  (function () {
    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
    });
  })();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen text-foreground bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <NavBar />
        <StarsBackground />
        <Toaster />

        {children}

        <Footer />
      </body>
    </html>
  );
}
