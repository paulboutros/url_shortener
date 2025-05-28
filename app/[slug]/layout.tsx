// app/layout.tsx
import React from "react";

export const metadata = {
  title: "URL Shortener",
  description: "A simple URL shortener",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
