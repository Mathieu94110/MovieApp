import React, { ReactNode } from "react";
import Header from "@/components/Header/Header";
import AuthProvider from "@/components/AuthProvider/AuthProvider"
import "./globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { roboto, montserrat } from "@/fonts";

interface LayoutProps {
  children?: ReactNode
  params: { locale: any }
}
export const metadata = {
  title: "Projet MovieApp en NextJs",
  description:
    "Projet MovieApp qui permet de retrouver des films et séries et un système de traduction en anglais",
};

export default function RootLayout({ children, params: { locale } }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <Header locale={locale} />
        <main><AuthProvider>{children}</AuthProvider></main>
      </body>
    </html>
  );
}
