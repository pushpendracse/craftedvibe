import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CraftedVibe Studio | Exhibition Stand Builder & Interior Design",
  description:
    "CraftedVibe Studio is a trusted stand builder for brands and interior design company. Innovative, expertise & unparalleled quality with 20,000+ sqm of exhibit space designed.",
  keywords:
    "exhibition stand builder, interior design, trade show booth, custom exhibits, brand activation, event design, CraftedVibe Studio",
  authors: [{ name: "CraftedVibe Studio" }],
  openGraph: {
    title: "CraftedVibe Studio | Exhibition Stand Builder & Interior Design",
    description:
      "Trusted stand builder for brands. Innovative, expertise & unparalleled quality with 20,000+ sqm of exhibit space designed.",
    type: "website",
    siteName: "CraftedVibe Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "CraftedVibe Studio | Exhibition Stand Builder & Interior Design",
    description:
      "Trusted stand builder for brands. Innovative, expertise & unparalleled quality.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
