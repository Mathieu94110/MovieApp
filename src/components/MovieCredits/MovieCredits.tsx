import React from "react";
import Image from "next/image";
import { getMovieByPath } from "@/utils/movieClient";
import { mediaCredits } from "@/types/types";
import styles from "./MovieCredits.module.scss";
import mysteryPerson from "../../../public/mystery-person.jpg";

const MovieCredits = async ({
  movieId,
  type
}: {
  movieId: number;
  type: 'movie' | 'tv'
}) => {
  const { cast } = await getMovieByPath(`/${type}/${movieId}/credits`);
  return (
    <div className={styles.movieCredits}>
      {cast.slice(0, 4).map((person: mediaCredits) => (
        <div key={person.id}>
          <div className={styles.movieCreditsImg}>
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w185${person.profile_path ? person.profile_path : mysteryPerson}`}
              alt={person.name}
              layout="fill"
              objectFit="cover"
              unoptimized
            />
          </div>
          <p>{person.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCredits;
