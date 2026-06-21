import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Lora({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = DM_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Labour Direct — Government with GPS. Ready on Day One.",
  description:
    "Labour Direct is a cross-sector digital platform that integrates policy and infrastructure planning for every sector of the Nigerian economy. A ready-made system any government can adopt on Day One — instead of starting from scratch. No more lost projects. No more conflicting plans. No more wasted years.",
  keywords: [
    "Labour Direct",
    "Nigeria digital platform",
    "policy planning Nigeria",
    "infrastructure planning",
    "Nigerian economy",
    "government platform Nigeria",
    "Day One government",
  ],
  authors: [{ name: "Labour Direct" }],
  openGraph: {
    type: "website",
    url: "https://www.labourdirect.com",
    siteName: "Labour Direct",
    title: "Labour Direct — Government with GPS. Ready on Day One.",
    description:
      "A cross-sector digital platform that integrates policy and infrastructure planning for every sector of the Nigerian economy. Any government can adopt it on Day One.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Labour Direct — Government with GPS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Labour Direct — Government with GPS. Ready on Day One.",
    description:
      "A cross-sector digital platform integrating policy and infrastructure planning for every sector of the Nigerian economy.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
          transition: "background-color 0.3s, color 0.3s",
        }}
      >
        <Preloader />
        <Navbar />
        <main style={{ flexGrow: 1, padding: "24px 0" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
