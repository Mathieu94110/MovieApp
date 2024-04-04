import React from "react";
import SearchSerieResults from "../../SearchSerieResults";



const GenreIdPage = ({ params: { id, locale }, searchParams }: any) => {
    return (
        <SearchSerieResults searchParams={searchParams} genreId={id} locale={locale} />
    );
};

export default GenreIdPage;
