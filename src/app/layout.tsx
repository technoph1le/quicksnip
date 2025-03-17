import type { Metadata } from "next";
<<<<<<< HEAD
=======
import { Source_Sans_3 } from "next/font/google";
import "@/styles/globals.css";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
});
>>>>>>> 84f0698 (Removed vite & recreated with nextjs)

export const metadata: Metadata = {
  title: "QuickSnip",
  description:
    "QuickSnip is an open-source tool designed for developers who want to organize, search, and share code snippets across various programming languages. It provides a centralized platform for managing handy snippets. Built with love and powered by an awesome community.",
};

export default function RootLayout({
  children,
<<<<<<< HEAD
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <meta
          name="keywords"
          content="QuickSnip, code snippets, snippet manager, developer tools, programming, coding"
        />
        <meta name="author" content="Technophile" />

        {/* Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:title" content="QuickSnip - Code Snippet Manager" />
        <meta
          property="og:description"
          content="QuickSnip helps you organize, search, and manage your code snippets efficiently."
        />
        <meta
          property="og:image"
          content="https://github.com/technoph1le/quicksnip/blob/main/public/preview.png?raw=true"
        />
        <meta property="og:url" content="https://quicksnip.dev/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card for better link previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QuickSnip - Code Snippet Manager" />
        <meta
          name="twitter:description"
          content="QuickSnip helps you organize, search, and manage your code snippets efficiently."
        />
        <meta
          name="twitter:image"
          content="https://github.com/technoph1le/quicksnip/blob/main/public/preview.png?raw=true"
        />
        <meta name="twitter:site" content="@technoph1leyt" />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical URL (Avoid duplicate content issues) */}
        <link rel="canonical" href="https://quicksnip.dev/" />
      </head>
      <body>
        <div id="root" role="presentation">
          {children}
        </div>
        <div id="modal-root"></div>
      </body>
=======
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.className}`}>{children}</body>
>>>>>>> 84f0698 (Removed vite & recreated with nextjs)
    </html>
  );
}
