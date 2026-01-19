import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Fragment } from "react/jsx-runtime";
import TopHeader from "./components/Headers/TopHeader";

const lexendSans = Lexend({
  variable: "--font-lexand-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Foreware",
  description: "Technology That Moves Business Forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendSans.variable} antialiased`}>
        <TopHeader />
        <Fragment>{children}</Fragment>
      </body>
    </html>
  );
}
