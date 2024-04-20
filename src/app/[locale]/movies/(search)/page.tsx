import React from "react";
import SearchMovieResults from "./SearchMovieResults";
import { searchParams } from "@/types/types";

interface MoviesPageProps {
  searchParams: searchParams
  params: { id: string, locale: "en" | "fr" }
}

const MoviesPage = ({ searchParams, params: { id, locale } }: MoviesPageProps) => {
  return <SearchMovieResults searchParams={searchParams} genreId={id} locale={locale} />;

}
export default MoviesPage;
