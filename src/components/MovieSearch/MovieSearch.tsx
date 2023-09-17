"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";
import { useCurrentLanguage } from "@/hooks/useCurrentLanguage";
import { mediaType } from "@/types/types";
import styles from "./MovieSearch.module.scss";

const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState<mediaType[]>([]);
  const [hasFocus, setHasFocus] = useState<boolean>(false);
  const currentLanguage = useCurrentLanguage() as string;

  const updateMovieSearch = async (query: string) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    setMovieResults(results.filter((movie: mediaType) => movie.backdrop_path));
  };

  return (
    <div className={styles.searchContainer}>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        onChange={(e) => updateMovieSearch(e.target.value)}
        placeholder="Rechercher un titre ..."
        onBlurCapture={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
        className={styles.debounceInput}
      />
      {movieResults.length > 0 && hasFocus && (
        <MovieSearchResults
          movieResults={movieResults}
          locale={currentLanguage}
        />
      )}
    </div>
  );
};

export default MovieSearch;
