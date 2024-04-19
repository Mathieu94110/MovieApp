import React from "react";
import SearchSerieResults from "../../SearchSerieResults";
import { searchParams } from "@/types/types";

interface SeriesGenreIdProps {
    searchParams: searchParams
    params: { locale: "en" | "fr", id: string }
}

const GenreIdPage = ({ params: { id, locale }, searchParams }: SeriesGenreIdProps) => {
    return (
        <SearchSerieResults searchParams={searchParams} genreId={id} locale={locale} />
    );
};

export default GenreIdPage;
