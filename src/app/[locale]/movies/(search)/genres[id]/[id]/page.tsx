import React from "react";
import SearchResults from "../../SearchResults";
import { searchParams } from "@/types/types";

interface GenreIdPageProps {
  params: { id: number; locale: string };
  searchParams: searchParams;
}

const GenreIdPage = ({
  params: { id, locale },
  searchParams,
}: GenreIdPageProps) => {
  return (
    <SearchResults searchParams={searchParams} genreId={id} locale={locale} />
  );
};

export default GenreIdPage;
