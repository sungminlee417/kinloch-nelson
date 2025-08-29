import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = savedTheme || systemTheme;
                  
                  if (theme === 'system') {
                    theme = systemTheme;
                  }
                  
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  // Fallback to light theme
                  document.documentElement.classList.add('light');
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
