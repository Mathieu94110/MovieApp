import React from "react";
import SearchMovieResults from "../../SearchMovieResults";
import { searchParams } from "@/types/types";

interface MoviesGenreIdProps {
  searchParams: searchParams
  params: { locale: "en" | "fr", id: string }
}

const GenreIdPage = ({ params: { id, locale }, searchParams }: MoviesGenreIdProps) => {
  return (
    <SearchMovieResults searchParams={searchParams} genreId={id} locale={locale} />
  );
};

export default GenreIdPage;
