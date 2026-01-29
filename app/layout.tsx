import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kiru Photostories | Cinematic Wedding Photography",
  description: "Premium Wedding & Pre-wedding Photography by Kiru Gowda. Capturing timeless moments, candid emotions, and cinematic grandeur in Bangalore and beyond.",
  openGraph: {
    type: "website",
    url: "https://kiruphotostories.com/",
    title: "Kiru Photostories | Cinematic Wedding Photography",
    description: "Premium Wedding & Pre-wedding Photography by Kiru Gowda. Capturing timeless moments, candid emotions, and cinematic grandeur in Bangalore and beyond.",
    images: [{
      url: "https://i.postimg.cc/8CSymQmD/IMG-3705-JPG.jpg",
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiru Photostories | Cinematic Wedding Photography",
    description: "Premium Wedding & Pre-wedding Photography by Kiru Gowda. Capturing timeless moments, candid emotions, and cinematic grandeur in Bangalore and beyond.",
    images: ["https://i.postimg.cc/8CSymQmD/IMG-3705-JPG.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
