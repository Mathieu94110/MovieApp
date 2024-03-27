import React from "react";
import Image from "next/image";
import MovieCredits from "../MovieCredits/MovieCredits";
import { Suspense } from "react";
import styles from "./MovieDetails.module.scss";

const MovieDetails = ({
  movie,
  type,
}: {
  movie: any;
  type: "movies" | "series";
}) => {
  return (
    <div className={styles.details}>
      <div className={styles.background}>
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
        />
      </div>
      <div className={styles.content}>
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w342${movie.poster_path}`}
          width={250}
          height={400}
          alt={movie.title}
        />
        <div className={styles.description}>
          <h1>
            {movie.title}{" "}
            {type === "movies" ? (
              <span className={styles.releaseDate}>
                ({new Date(movie.release_date).toLocaleDateString("fr-FR")})
              </span>
            ) : (
              <span className={styles.releaseDate}>
                <strong>
                  Première parution:{" "}
                  {new Date(movie.first_air_date).toLocaleDateString("fr-FR")}
                </strong>
              </span>
            )}
          </h1>
          <p className={styles.production}>
            Production :{" "}
            <span>
              {movie.production_companies.length > 0
                ? movie.production_companies
                  .map((company: { name: string }) => company.name)
                  .join(", ")
                : "Aucune information"}
            </span>
          </p>
          <h2>Synopsis</h2>
          <p className={styles.overview}>
            {movie.overview ? movie.overview : "Aucune information"}
          </p>
          <div className={styles.credits}>
            <Suspense fallback={<p>Chargement ...</p>}>
              <MovieCredits
                movieId={movie.id}
                type={type === "movies" ? "movie" : "tv"}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
