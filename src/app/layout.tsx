import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kflorez312.github.io"),
  title: {
    default: "Kenneth Florez | Lead Network Engineer",
    template: "%s | Kenneth Florez",
  },
  description:
    "Lead network engineer portfolio focused on enterprise networking, wireless, SD-WAN, campus networking, network observability, and network automation.",
  applicationName: "Kenneth Florez Portfolio",
  authors: [{ name: "Kenneth Florez" }],
  creator: "Kenneth Florez",
  publisher: "Kenneth Florez",
  keywords: [
    "lead network engineer",
    "senior network engineer",
    "enterprise networking",
    "wireless",
    "SD-WAN",
    "campus networking",
    "network observability",
    "network automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kenneth Florez | Lead Network Engineer",
    description:
      "Enterprise networking portfolio covering wireless modernization, SD-WAN transformation, campus core upgrades, observability, and network automation.",
    url: "/",
    siteName: "Kenneth Florez Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kenneth Florez | Lead Network Engineer",
    description:
      "Enterprise networking, wireless, SD-WAN, campus networking, observability, and network automation portfolio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
