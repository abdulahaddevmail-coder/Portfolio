import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";

import { ToastContainer } from "react-toastify";

import { Footer } from "./common/components/footer";
import { Header } from "./common/components/header";
import { ThemeProvider } from "./common/components/theme";
import { Whatsapp } from "./common/components/whatsapp-float";

import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Ahad | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Angular, React, TypeScript, Node.js, and modern web technologies. Crafting clean, efficient, and elegant digital experiences. View my projects and certifications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} ${figtree.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <ToastContainer />
        <Whatsapp phNumber={923136624697} message="Hello, I would like to get in touch with you!" />
      </body>
    </html>
  );
}
