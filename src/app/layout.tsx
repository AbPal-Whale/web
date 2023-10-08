import "./globals.css";

import { Footer, Header, ScrollToTopButton } from "@components/Layout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whalecomm",
  description: "Soluciones para el internet de las cosas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
