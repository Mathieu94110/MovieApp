import MovieDetails from "@/components/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/SimilarMovies/SimilarMovies";
import { getMovieByPath } from "@/utils/movieClient";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

interface MovieIdPageProps {
  params: { id: string; locale: string };
}
export const dynamic = "force-static";
export const revalidate = 3600;

const MovieIdPage = async ({ params: { id, locale } }: MovieIdPageProps) => {
  const movie = await getMovieByPath(`/movie/${id}`, [], locale);

  if (!movie.original_title) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails movie={movie} type="movies" />
      <Suspense fallback={<p>Chargement ...</p>}>
        <SimilarMovies movieId={movie.id} locale={locale} type="movie" />
      </Suspense>
    </div>
  );
};

export default MovieIdPage;