import React from "react";
import Image from "next/image";
import MovieCredits from "../MovieCredits/MovieCredits";
import { Suspense } from "react";
import { mediaType } from "@/types/types";
import styles from "./MovieDetails.module.scss";

const MovieDetails = ({ movie }: { movie: mediaType }) => {
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
            <span className={styles.releaseDate}>
              ({new Date(movie.release_date).toLocaleDateString("fr-FR")})
            </span>
          </h1>
          <p className={styles.production}>
            Production :{" "}
            <span>
              {movie.production_companies
                .map((company) => company.name)
                .join(", ")}
            </span>
          </p>
          <h2>Synopsis</h2>
          <p className={styles.overview}>{movie.overview}</p>
          <div className={styles.credits}>
            <Suspense fallback={<p>Chargement ...</p>}>
              <MovieCredits movieId={movie.id} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
