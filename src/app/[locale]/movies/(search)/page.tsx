import React from "react";
import SearchMovieResults from "./SearchMovieResults";
import { searchParams } from "@/types/types";

const MoviesPage = ({ searchParams }: { searchParams: searchParams }) => {
  return <SearchMovieResults searchParams={searchParams} />;
};

export default MoviesPage;
