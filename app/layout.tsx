import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Burger Joint | Main",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bitter.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
