import type { Metadata } from "next";
import { hostGrotesk, anton, geistSans, geistMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ewan Bradley",
  description:
    "CEO of Jeani Health. Duke Decathlete. Lead Researcher, Global Sports Medicine at Duke University.",
  openGraph: {
    title: "Ewan Bradley",
    description:
      "CEO of Jeani Health. Duke Decathlete. Lead Researcher, Global Sports Medicine at Duke University.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} ${anton.variable} ${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-paper text-ink font-grotesk antialiased">
        {children}
      </body>
    </html>
  );
}
