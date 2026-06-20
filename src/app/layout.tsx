import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tunde Abiola for President 2027: Building a Nigeria for All",
  description: "Official campaign website of Tunde Abiola. Explore our policies on economy, education, and infrastructure, and view state by state updates.",
  keywords: ["Tunde Abiola", "President 2027", "Nigeria Campaign", "Nigeria Policy", "Kano State", "Lagos State"],
  authors: [{ name: "Tunde Abiola Campaign" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
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
