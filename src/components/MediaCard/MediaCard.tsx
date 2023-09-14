import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mediaType } from "@/types/types";
import styles from "./MediaCard.module.scss";

interface MediaCardProps {
  media: mediaType;
  locale: string;
}

const MediaCard = ({ media, locale }: MediaCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={`/${locale}/movies/${media.id}`}>
        <div className={styles.image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path}`}
            alt={media.title}
            fill
          />
        </div>
        <div className={styles.content}>
          <p className={styles.vote}>{media.vote_average}</p>
          <h3>{media.title}</h3>
          <p>Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
