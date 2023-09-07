import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>
          <Link className={styles.links} href="/">
            MyMovieApp
          </Link>
        </p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href="/series" className={styles.links}>
                Séries
              </Link>
            </li>
            <li>
              <Link href="/movies" className={styles.links}>
                Films
              </Link>
            </li>
          </ul>
        </nav>
        <input type="text" placeholder="Rechercher un titre ..." />
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </header>
  );
};

export default Header;
