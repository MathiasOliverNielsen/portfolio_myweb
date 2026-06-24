import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathias Oliver Nielsen – Web Developer",
  description: "Freelance web developer from Aalborg, Denmark. Specializing in frontend and full-stack web development.",
  metadataBase: new URL("https://mathiasnielsen.dk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className={`${inter.variable} scroll-smooth h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-black font-inter">
        {children}
      </body>
    </html>
  );
}
