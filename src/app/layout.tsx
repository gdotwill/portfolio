import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import StarsCanvas from "@/components/main/StarBackground";
// import StarBackground from "@/components/main/StarBackground";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quantum Digitals",
  description: "Quantum Digitals Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {/* <StarsCanvas /> */} 
        {children}
      </body>
    </html>
  );
}