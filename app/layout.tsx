import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cedar Springs | Award-Winning Landscape Company | Oakville, Burlington, Ancaster",
  description:
    "Escape to your own backyard. Cedar Springs Landscapes crafts outdoor spaces with resort-style luxury — so every day feels like a getaway at home.",
  openGraph: {
    title: "Cedar Springs | Award-Winning Landscape Company | Oakville, Burlington, Ancaster",
    description:
      "Escape to your own backyard. Cedar Springs Landscapes crafts outdoor spaces with resort-style luxury — so every day feels like a getaway at home.",
    siteName: "Cedar Springs Landscapes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={epilogue.variable}>
      <body className="font-epilogue">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
