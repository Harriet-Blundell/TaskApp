"use client";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lusitana:wght@400;700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />

        {/* PWA: manifest + theme */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0f172a" />

        {/* iOS support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
