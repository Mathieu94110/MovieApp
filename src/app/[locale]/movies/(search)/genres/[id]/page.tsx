import React from "react";
import SearchResults from "../../SearchMovieResults";

const GenreIdPage = ({ params: { id, locale }, searchParams }: any) => {
  return (
    <SearchResults searchParams={searchParams} genreId={id} locale={locale} />
  );
};

export default GenreIdPage;
