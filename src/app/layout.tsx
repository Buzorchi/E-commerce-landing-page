import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import '../styles/globals.css';

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce-product-page",
  description: "Practice from Frontend mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>{children}</body>
    </html>
  );
}
