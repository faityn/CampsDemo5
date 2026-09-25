import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Тэнгэрийн Амралт — Амралтын газар",
  description: "Байгальд ойр, тайван амралтыг Тэнгэрийн Амра-д.",
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
