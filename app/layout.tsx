import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileNav } from "@/components/mobile-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VoucherKu",
  description: "Tempat terbaik untuk membeli voucher, pulsa, dan paket data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pb-14 md:pb-0">{children}</div>
        <MobileNav />
      </body>
    </html>
  );
}
