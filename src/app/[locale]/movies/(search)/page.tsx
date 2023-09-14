import React from "react";
import SearchResults from "./SearchResults";
import { searchParams } from "@/types/types";

const MoviesPage = ({ searchParams }: { searchParams: searchParams }) => {
  return <SearchResults searchParams={searchParams} />;
};

export default MoviesPage;
