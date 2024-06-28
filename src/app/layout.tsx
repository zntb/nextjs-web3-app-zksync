import SharedLayout from "@/components/shared-layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nextjs-web3-app-zksync",
  description: "Web3 App in ZkSync network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SharedLayout>{children}</SharedLayout>
        <Toaster />
      </body>
    </html>
  );
}
