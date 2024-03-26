import React from "react";
import Image from "next/image";
import styles from "./MediaCard.module.scss";
import Link from "next/link";
import Like from "./Like/Like";

const MediaCard = ({ media, locale, type }: {
  media: any;
  type: "movies" | "series" | "movie" | "tv";
  locale: "fr" | "en"
}) => {
  console.log('media =', media, "type =", type, 'locale =', locale)
  return (
    <div className={styles.card}>
      <Link href={`/${locale}/${type === "movies" || type === "movie" ? "movies" : "series"
        }/${media.id}`}>
        <div className={styles.image}>
          <Like mediaId={media.id} />
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path}`}
            alt={media.title}
            fill
          />
        </div>
        <div className={styles.content}>
          <p className={styles.vote}>{media.vote_average}</p>
          <h3>
            {type === "movies" || type === "movie" ? media.title : media.name}
          </h3>
          {type === "movies" || type === "movie" ? (
            <p>Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
          ) : (
            <p>
              <strong>
                Première parution:{" "}
                {new Date(media.first_air_date).toLocaleDateString("fr-FR")}
              </strong>
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;