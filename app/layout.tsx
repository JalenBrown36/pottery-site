import type { Metadata } from "next";
import { urbanist } from "./ui/Fonts";
import "@/app/ui/global.css";
import Header from "./ui/pages/Header";
import Footer from "./ui/pages/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased bg-mainBg bg-fixed`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
