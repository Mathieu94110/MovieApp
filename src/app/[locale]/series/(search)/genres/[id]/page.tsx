import React from "react";
import SearchSerieResults from "../../SearchSerieResults";


interface GenreIdPageProps {
    params: {
        id: number,
        locale: "fr" | "en"
    }
    searchParams: { [key: string]: string | string[] | undefined };
}


const GenreIdPage = ({ params: { id, locale }, searchParams }: GenreIdPageProps) => {
    return (
        <SearchSerieResults searchParams={searchParams} genreId={id} locale={locale} />
    );
};

export default GenreIdPage;
