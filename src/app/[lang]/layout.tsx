import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/homepage/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--heading-font",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--body-font",
});

export const metadata: Metadata = {
  title: "NeuralOps - The All-in-One AI Operations Platform",
  description:
    "NeuralOps empowers businesses with a scalable, secure, and modular AI platform.",
  icons: {
    icon: "/favicon2.png", // Point to the PNG instead
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} className={`${sora.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
