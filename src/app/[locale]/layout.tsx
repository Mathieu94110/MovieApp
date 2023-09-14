"use client";

import Header from "@/components/Header/Header";
import "./globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { roboto, montserrat } from "@/fonts";
import { availableLocales } from "@/utils/i18n";

interface AppLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return availableLocales.map((locale) => ({
    locale,
  }));
}

export default function RootLayout({
  children,
  params: { locale },
}: AppLayoutProps) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <Header locale={locale} />
        <main>{children}</main>
      </body>
    </html>
  );
}
