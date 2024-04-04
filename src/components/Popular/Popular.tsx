import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../MediaCard/MediaCard";
import styles from "./Popular.module.scss";
import { getDictionary } from "@/utils/dictionaries";
import { mediaType } from "@/types/types";

const Popular = async ({ locale }: { locale: string }) => {
  const { results } = await getMovieByPath("/movie/popular", [], locale);
  const i18n = await getDictionary(locale);
  const popularMovies = results.slice(0, 6);
  return (
    <div className={styles.popular}>
      <h2 className={styles.popularTitle}>{i18n.popular.title}</h2>
      <div className={styles.popularList}>
        {popularMovies.map((movie: mediaType) => (
          <MediaCard key={movie.id} media={movie} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
