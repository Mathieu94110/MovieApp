import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "@/components/MediaCard/MediaCard";
import styles from "./SearchSerieResults.module.scss";
import { mediaType, searchParams } from "@/types/types";

interface SearchSerieResultsProps {
  searchParams: searchParams
  locale: 'en' | 'fr',
  genreId: number
}

const SearchSerieResults = async ({ searchParams, genreId, locale }: SearchSerieResultsProps) => {
  const { results } = await getMovieByPath(
    "/discover/tv",
    [
      { key: "sort_by", value: searchParams.sort_by },
      { key: "first_air_date.gte", value: searchParams["first_air_date.gte"] },
      { key: "first_air_date.lte", value: searchParams["first_air_date.lte"] },
      { key: "with_genres", value: genreId },
    ],
    locale
  );
  return (
    <div className={styles.results}>
      {results
        .filter((serie: mediaType) => serie.poster_path)
        .map((serie: mediaType) => (
          <MediaCard key={serie.id} media={serie} locale={locale} type="series" />
        ))}
    </div>
  );
};

export default SearchSerieResults;
