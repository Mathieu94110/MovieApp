import SearchSidebar from "@/components/SearchSidebar/SearchSidebar";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./layout.module.scss";

interface MovieSearchLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const MovieSearchLayout = async ({
  children,
  params: { locale },
}: MovieSearchLayoutProps) => {
  const { genres } = await getMovieByPath("/genre/movie/list", [], locale);
  return (
    <div className={styles.searchContainer}>
      <SearchSidebar genres={genres} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
