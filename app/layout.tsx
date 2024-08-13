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
      <body className={`relative pb-16 ${urbanist.className} antialiased text-sm lg:text-base [&_h2]:text-4xl [&_h2]:lg:text-5xl [&_h4]:text-base [&_h4]:lg:text-lg [&_h4]:xl:text-xl [&_h4]:font-bold bg-white text-[#39160B]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
