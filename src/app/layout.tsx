import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "@/styles/globals.css";
import { AppProvider } from "@/contexts/AppContext";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickSnip",
  description:
    "QuickSnip is an open-source tool designed for developers who want to organize, search, and share code snippets across various programming languages. It provides a centralized platform for managing handy snippets. Built with love and powered by an awesome community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={`${sourceSans3.className}`}>{children}</body>
      </html>
    </AppProvider>
  );
}
