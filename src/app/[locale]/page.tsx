import Genres from "@/components/Genres/Genres";
import Popular from "@/components/Popular/Popular";
import styles from "./page.module.css";
import { availableLocales } from "@/utils/i18n";

export function generateStaticParams() {
  return availableLocales.map((locale) => ({
    locale,
  }));
}

export default function Home({ params: { locale } }: { params: { locale: "en" | "fr" } }) {
  return (
    <div className={styles.main}>
      <Popular locale={locale} />
      <Genres locale={locale} />
    </div>
  );
}
