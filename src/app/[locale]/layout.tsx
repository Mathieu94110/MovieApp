"use client";

import Header from "@/components/Header/Header";
import { useCurrentLanguage } from "@/hooks/useCurrentLanguage";
import { roboto, montserrat } from "@/fonts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.scss";

interface AppLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: AppLayoutProps) {
  const currentLanguage = useCurrentLanguage();
  return (
    <html
      lang={
        Array.isArray(currentLanguage) ? currentLanguage[0] : currentLanguage
      }
    >
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <Header locale={locale} />
        <main>{children}</main>
      </body>
    </html>
  );
}
