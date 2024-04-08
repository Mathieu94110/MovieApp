import { getMovieByPath } from "@/utils/movieClient";
import styles from "./SimilarMovies.module.scss";
import React from "react";
import MediaCard from "../MediaCard/MediaCard";
import { mediaType } from "@/types/types";

const SimilarMovies = async ({ movieId, type, locale }: { movieId: number; type: "movies" | "series" | "movie" | "tv"; locale: "fr" | "en" }) => {
  const { results } = await getMovieByPath(
    `/${type}/${movieId}/similar`,
    [],
    locale
  );
  return (
    <div className={styles.similar}>
      <div className={styles.list}>
        {results.slice(0, 6).map((movie: mediaType) => (
          <MediaCard media={movie} key={movie.id} locale={locale} type="movies" />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;