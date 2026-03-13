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
  description: "Найсмачніша піца у Чернівцях від Yumes Pizza. Замовляйте онлайн та насолоджуйтеся свіжою, ароматною піцою з доставкою прямо до вашого дому. Виберіть свою улюблену піцу та отримайте її швидко та смачно!",
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
