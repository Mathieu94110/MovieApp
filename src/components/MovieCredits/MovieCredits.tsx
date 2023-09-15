import React from "react";
import Image from "next/image";
import { getMovieByPath } from "@/utils/movieClient";
import { mediaCredits } from "@/types/types";
import styles from "./MovieCredits.module.scss";

const MovieCredits = async ({ movieId }: { movieId: number }) => {
  const { cast } = await getMovieByPath(`/movie/${movieId}/credits`);
  return (
    <div className={styles.movieCredits}>
      {cast.slice(0, 4).map((person: mediaCredits) => (
        <div key={person.id}>
          <div className={styles.movieCreditsImg}>
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w185${person.profile_path}`}
              alt={person.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p>{person.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCredits;
