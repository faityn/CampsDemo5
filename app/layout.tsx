import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Integrated tourism lodges",
  description: "Three distinctive escapes across Mongolia.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
