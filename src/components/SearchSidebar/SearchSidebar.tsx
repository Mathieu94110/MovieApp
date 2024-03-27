"use client";
import {
  useSelectedLayoutSegment,
  useParams,
  notFound,
  usePathname,
} from "next/navigation";
import Form from "./form/Form";
import styles from "./SearchSideBar.module.scss";

const SearchSidebar = ({
  genres,
}: {
  genres: { id: number; name: string }[];
}) => {
  const segment = useSelectedLayoutSegment();
  const pathName = usePathname();
  const { id } = useParams();

  const getSidebarTitle = () => {
    const category = pathName.includes("movies")
      ? "Tous les films"
      : "Toutes les séries";
    if (!segment) {
      return category;
    }
    const genre = genres.find((genre) => genre.id === Number(id));
    if (!genre) {
      return notFound();
    }
    return `${category} ${" "} "${genre.name}"`;
  };
  const title = getSidebarTitle();
  return (
    <div className={styles.sidebar}>
      <h1>{title}</h1>
      <Form />
    </div>
  );
};

export default SearchSidebar;
