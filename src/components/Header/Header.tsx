import React from "react";
import Link from "next/link";
import Image from "next/image";
import MovieSearch from "../MovieSearch/MovieSearch";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import styles from "./Header.module.scss";
import appLogo from "../../../public/Films-et-Series.jpeg";

const Header = ({ locale }: { locale: string }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href={`/${locale}`} className={styles.logo}>
          <Image src={appLogo} alt="Films et series" height={40} />
        </Link>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href={`/${locale}/series`}>Séries</Link>
            </li>
            <li>
              <Link href={`/${locale}/movies`}>Films</Link>
            </li>
          </ul>
        </nav>
      </div>
      <MovieSearch />
      <LanguageSelector />
    </header>
  );
};

export default Header;
