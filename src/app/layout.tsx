import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Explore India`,
    template: `%s | ${siteConfig.name}`,
  },

  description:
    "Explore destinations across India, discover tour packages, and plan your next journey with Chamunda Tours & Travels.",

  applicationName: siteConfig.name,

  openGraph: {
    title: siteConfig.name,
    description:
      "Discover destinations and explore travel packages with Chamunda Tours & Travels.",
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
