import React from "react";
import Image from "next/image";
import styles from "./MediaCard.module.scss";
import Link from "next/link";

const MediaCard = ({ mediaId }) => {
  return (
    <div className={styles.card}>
      <Link href={`/movies/${mediaId}`}>
        <div className={styles.image}>
          <Image
            src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
            alt="media title"
            fill
          />
        </div>
        <div className={styles.content}>
          <h2>Fast and Furious X</h2>
          <p>Le 01/05/2023</p>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
