import Genres from "@/components/Genres/Genres";
import Popular from "@/components/Popular/Popular";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
      <Genres />
    </div>
  );
}
