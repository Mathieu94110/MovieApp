import Genres from "@/components/Genres/Genres";
import Popular from "@/components/Popular/Popular";
import styles from "./page.module.css";
import SignIn from "@/components/SignIn/SignIn";

export default function Home({ params: { locale } }) {
  return (
    <div className={styles.main}>
      <SignIn />
      {/* <Popular locale={locale} />
      <Genres locale={locale} /> */}
    </div>
  );
}
