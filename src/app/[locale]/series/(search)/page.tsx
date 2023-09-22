import React from "react";
import SearchSerieResults from "./SearchSerieResults";
import { searchParams } from "@/types/types";

const SeriesPage = ({ searchParams }: { searchParams: searchParams }) => {
  return <SearchSerieResults searchParams={searchParams} />;
};

export default SeriesPage;
