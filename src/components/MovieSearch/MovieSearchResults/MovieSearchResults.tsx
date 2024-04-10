import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { mediaType } from "@/types/types";
import styles from "./MovieSearchResults.module.scss";
import mysteryMedia from '../../../../public/mystery.jpg'

interface resultsByType {
  series: mediaType[];
  movies: mediaType[];
}

const MovieSearchResults = ({
  movieResults,
  locale,
}: {
  movieResults: mediaType[];
  locale: 'en' | 'fr';
}) => {
  const [resultsByType, setResultsByType] = useState<resultsByType>({ series: [], movies: [] });

  useEffect(() => {
    setResultsByType({ series: movieResults.filter(item => item.media_type === "tv"), movies: movieResults.filter(item => item.media_type === "movie") })
  }, [movieResults]);

  return (
    <div className={styles.searchResults}>
      {resultsByType.movies.length ?
        <>
          <div className={styles.categories}>
            <h2>Films</h2>
          </div>
          {resultsByType.movies.map((movie) => (
            <div key={movie.id}>
              <Link
                href={`/${locale}/movies/${movie.id}`}
                onMouseDown={(e) => e.preventDefault()}
              >
                <Image
                  width={90}
                  height={50}
                  src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.backdrop_path ? movie.backdrop_path : mysteryMedia}`}
                  alt={movie.title
                  }
                />
                <p>{movie.title}</p>
              </Link>
            </div>
          ))}
        </>
        : null}
      {resultsByType.series.length ?
        <>
          <div className={styles.categories}>
            <h2>Séries</h2>
          </div>
          {resultsByType.series.map((serie) => (
            <div key={serie.id}>
              <Link
                href={`/${locale}/series/${serie.id}`}
                onMouseDown={(e) => e.preventDefault()}
              >
                <Image
                  width={90}
                  height={50}
                  src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${serie.backdrop_path ? serie.backdrop_path : mysteryMedia}`}
                  alt={serie.original_name
                  }
                />
                <p>{serie.original_name}</p>
              </Link>
            </div>
          ))}
        </>
        : null}
    </div>
  );
};

export default MovieSearchResults;
