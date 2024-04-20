import React from "react";
import SearchSerieResults from "./SearchSerieResults";
import { searchParams } from "@/types/types";

interface SeriesPagedProps {
  searchParams: searchParams
  params: { id: string, locale: "en" | "fr" }
}

const SeriesPage = ({ searchParams, params: { id, locale } }: SeriesPagedProps) => {
  return <SearchSerieResults searchParams={searchParams} genreId={id} locale={locale} />;
};

export default SeriesPage;
