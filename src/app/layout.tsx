import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LoadingAnimation from "@/components/LoadingAnimation";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harding Labs — AI product studio",
  description:
    "Harding Labs is an independent AI product studio led by Davin Harding. StageSnap declutters, empties, or furnishes listing photos in about 30 seconds. Vibecation turns an Instagram grid into a trip plan. Both are live.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${instrumentSerif.variable} antialiased`}
      >
        <LoadingAnimation />
        {children}
      </body>
    </html>
  );
}
