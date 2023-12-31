import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../MediaCard/MediaCard";
import { mediaType } from "@/types/types";
import styles from "./SimilarMovies.module.scss";

const SimilarMovies = async ({
  movieId,
  locale,
  type,
}: {
  movieId: number;
  locale: string;
  type: "movie" | "tv";
}) => {
  const { results } = await getMovieByPath(
    `/${type}/${movieId}/similar`,
    [],
    locale
  );
  return (
    <div className={styles.similar}>
      <div className={styles.list}>
        {results.slice(0, 6).map((movie: mediaType) => (
          <MediaCard media={movie} key={movie.id} type={type} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
