import React from "react";
import SearchSerieResults from "./SearchSerieResults";
import { searchParams } from "@/types/types";

interface SeriesPagedProps {
  searchParams: searchParams
  params: { locale: string }
}

const SeriesPage = ({ searchParams, params: { locale } }: SeriesPagedProps) => {
  return <SearchSerieResults searchParams={searchParams} locale={locale} />;
};

export default SeriesPage;
