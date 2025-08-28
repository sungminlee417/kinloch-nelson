import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kinloch Nelson - Fingerstyle Guitar",
  description: "Virtuosic fingerstyle guitarist from Rochester, NY, blending classical technique with jazz sensibilities through American roots, blues, and contemporary music.",
  keywords: ["fingerstyle guitar", "Rochester NY", "classical guitar", "jazz guitar", "acoustic guitar", "Kinloch Nelson"],
  authors: [{ name: "Kinloch Nelson" }],
  openGraph: {
    title: "Kinloch Nelson - Fingerstyle Guitar",
    description: "Virtuosic fingerstyle guitarist from Rochester, NY",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="light">
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
