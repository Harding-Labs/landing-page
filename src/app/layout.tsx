import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LoadingAnimation from "@/components/LoadingAnimation";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harding Labs | AI Product Studio",
  description:
    "Harding Labs builds and launches AI-native apps. StageSnap stages real estate photos; Vibecation turns Instagram into Travel DNA and trip plans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${spaceGrotesk.variable} antialiased`}>
        <LoadingAnimation />
        {children}
      </body>
    </html>
  );
}
