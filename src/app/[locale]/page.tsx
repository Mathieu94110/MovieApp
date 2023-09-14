import Genres from "@/components/Genres/Genres";
import Popular from "@/components/Popular/Popular";
import { Metadata } from "next";
import styles from "./page.module.css";

interface AppPageProps {
  params: { locale: string };
}

export const metadata: Metadata = {
  title: "Aplication Movie App",
  description: "Permet de rechercher des films et séries",
  openGraph: {
    title: "Aplication Movie App",
  },
};

export default function Home({ params: { locale } }: AppPageProps) {
  return (
    <div className={styles.main}>
      <Popular locale={locale} />
      <Genres locale={locale} />
    </div>
  );
}
