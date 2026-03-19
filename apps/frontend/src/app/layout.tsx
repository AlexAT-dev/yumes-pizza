import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/templates/MainLayout";
import StoreContext from "./contexts/Store.context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yumes Pizza - найсмачніша піца у Чернівцях",
  description: "Найсмачніша піца у Чернівцях від Yumes Pizza. Замовляйте онлайн та насолоджуйтеся свіжою, ароматною піцою з доставкою прямо до вашого дому.",
  alternates: {
    canonical: "https://yumes-pizza.pp.ua/",
  },
  openGraph: {
    title: "Yumes Pizza — найсмачніша піца у Чернівцях",
    description: "Замовляйте піцу онлайн та насолоджуйтеся свіжою, ароматною піцою з доставкою прямо до дому.",
    url: "https://yumes-pizza.pp.ua/",
    siteName: "Yumes Pizza",
    type: "website",
    locale: "uk_UA",
    images: [
      {
        url: "https://yumes-pizza.pp.ua/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yumes Pizza — найсмачніша піца у Чернівцях",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yumes Pizza — найсмачніша піца у Чернівцях",
    description: "Замовляйте піцу онлайн та насолоджуйтеся свіжою, ароматною піцою з доставкою прямо до дому.",
    images: ["https://yumes-pizza.pp.ua/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreContext>
          <MainLayout>
            {children}
          </MainLayout>
        </StoreContext>
      </body>
    </html>
  );
}
