import { getMovieByPath } from "@/utils/movieClient";
import Link from "next/link";
import styles from "./Genres.module.scss";
import { getDictionary } from "@/utils/dictionaries";

const Genres = async ({ locale }: { locale: any }) => {
  const { genres } = await getMovieByPath("/genre/movie/list", [], locale);
  const i18n = await getDictionary(locale);
  return (
    <div>
      <h2 className={styles.genresTitle}>{i18n.genres.title}</h2>
      <div className={styles.genresList}>
        {genres.map((genre: { id: number; name: string }) => (
          <div key={genre.id} className={styles.genre}>
            <Link href={`/${locale}/movies/genres/${genre.id}`}>
              <p>{genre.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
