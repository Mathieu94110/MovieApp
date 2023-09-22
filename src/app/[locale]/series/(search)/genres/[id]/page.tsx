import React from "react";
import SearchRe

const GenreIdPage = ({ params: { id, locale }, searchParams }) => {
  return (
    <SearchResults searchParams={searchParams} genreId={id} locale={locale} />
  );
};

export default GenreIdPage;