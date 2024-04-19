import React from "react";
import SearchMovieResults from "./SearchMovieResults";
import { searchParams } from "@/types/types";

interface MoviesPageProps {
  searchParams: searchParams
  params: { locale: "en" | "fr" }
}

const MoviesPage = ({ searchParams, params: { locale } }: MoviesPageProps) => {
  return <SearchMovieResults searchParams={searchParams} locale={locale} />;
};

export default MoviesPage;
