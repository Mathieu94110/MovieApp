import SearchSidebar from "@/components/SearchSidebar/SearchSidebar";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./layout.module.scss";

interface SerieSearchLayoutProps {
  children: React.ReactNode;
  params: { locale: "en" | "fr" };
}

const SeriesSearchLayout = async ({
  children,
  params: { locale },
}: SerieSearchLayoutProps) => {
  const { genres } = await getMovieByPath("/genre/tv/list", [], locale);
  return (
    <div className={styles.searchContainer}>
      <SearchSidebar genres={genres} type="tv" />
      <div>{children}</div>
    </div>
  );
};

export default SeriesSearchLayout;
