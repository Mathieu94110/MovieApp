import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "@/components/MediaCard/MediaCard";
import styles from "./SearchMovieResults.module.scss";

const SearchMovieResults = async ({ searchParams, genreId, locale }) => {
  const { results } = await getMovieByPath(
    "/discover/movie",
    [
      { key: "sort_by", value: searchParams.sort_by },
      { key: "release_date.gte", value: searchParams["release_date.gte"] },
      { key: "release_date.lte", value: searchParams["release_date.lte"] },
      { key: "with_genres", value: genreId },
    ],
    locale
  );
  return (
    <div className={styles.results}>
      {results
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <MediaCard key={movie.id} media={movie} locale={locale} type="movies" />
        ))}
    </div>
  );
};

export default SearchMovieResults;
