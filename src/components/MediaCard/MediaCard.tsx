import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MediaCard.module.scss";

const MediaCard = ({
  media,
  type,
}: {
  media: any;
  type: "movies" | "series" | "movie" | "tv";
}) => {
  return (
    <div className={styles.card}>
      <Link
        href={`/${
          type === "movies" || type === "movie" ? "movies" : "series"
        }/${media.id}`}
      >
        <div className={styles.image}>
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
