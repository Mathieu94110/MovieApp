import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "@/components/MediaCard/MediaCard";
import styles from "./SearchSerieResults.module.scss";
import { searchParams } from "@/types/types";

interface SearchSerieResultsProps {
  searchParams: searchParams
  locale: string,
  genreId: number
}

const SearchSerieResults = async ({ searchParams, genreId, locale }: SearchSerieResultsProps) => {
  const { results } = await getMovieByPath(
    "/discover/tv",
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
        .filter((serie: any) => serie.poster_path)
        .map((serie: any) => (
          <MediaCard key={serie.id} media={serie} locale={locale} type="series" />
        ))}
    </div>
  );
};

export default SearchSerieResults;
