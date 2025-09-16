"use client";

import React from "react";
import Image from "next/image";
import styles from "./MediaCard.module.scss";
import Link from "next/link";
import Like from "./Like/Like";
import { mediaType } from "@/types/types";
import mysteryMedia from "../../../public/mystery.jpg";

const MediaCard = ({ media, locale, type }: {
  media: mediaType;
  type: "movies" | "series";
  locale: "fr" | "en"
}) => {
  return (
    <div className={styles.card}>
      <Link href={`/${locale}/${type}/${media.id}`}>
        <div className={styles.image}>
          <Like mediaId={media.id} />
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path ? media.poster_path : mysteryMedia}`}
            alt={media.title}
            fill
            unoptimized
          />
        </div>
        <div className={styles.content}>
          <p className={styles.vote}>{media.vote_average}</p>
          <h3>
            {type === "movies" ? media.title : media.name}
          </h3>
          {type === "movies" ? (
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