import MovieDetails from "@/components/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/SimilarMovies/SimilarMovies";
import { getMovieByPath } from "@/utils/movieClient";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

interface SerieIdPageProps {
  params: { id: string; locale: string };
}

export async function generateMetadata({ params }: SerieIdPageProps) {
  const { id, locale } = params;
  const movie = await getMovieByPath(`/tv/${id}`, [], locale);

  return {
    title: movie.title,
    description: movie.overview,
  };
}
export const dynamic = "force-static";
export const revalidate = 3600;

const SerieIdPage = async ({ params: { id, locale } }: SerieIdPageProps) => {
  const serie = await getMovieByPath(`/tv/${id}`, [], locale);

  if (!serie.name) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails movie={serie} type="series" />
      <Suspense fallback={<p>Chargement ...</p>}>
        <SimilarMovies movieId={serie.id} locale={locale} type="tv" />
      </Suspense>
    </div>
  );
};

export default SerieIdPage;
