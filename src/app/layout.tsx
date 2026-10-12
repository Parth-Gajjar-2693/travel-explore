import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Chamunda Tours & Travels | Plan Your Next Journey",
    template: "%s | Chamunda Tours & Travels",
  },
  description:
    "Discover exciting destinations, explore holiday packages, and plan your next journey with Chamunda Tours & Travels.",
  applicationName: "Chamunda Tours & Travels",
  openGraph: {
    title: "Chamunda Tours & Travels",
    description:
      "Your journey, our priority. Discover destinations and plan memorable trips with Chamunda Tours & Travels.",
    siteName: "Chamunda Tours & Travels",
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
