import React from "react";
import Link from "next/link";
import Image from "next/image";
import MovieSearch from "../MovieSearch/MovieSearch";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import styles from "./Header.module.scss";
import appLogo from "../../../public/Films-et-Series.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
            <li>
              <Link href={`/${locale}/signup`}>Inscription</Link>
            </li>
          </ul>
        </nav>
      </div>
      <MovieSearch />
      <div>
        <Link href={`/${locale}/user/profile`}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
      <LanguageSelector />
    </header>
  );
};

export default Header;
