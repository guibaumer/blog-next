import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global-styles.css";
import { SITE_NAME } from "@/config/app-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_NAME,
  description: 'Blog criado com next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
