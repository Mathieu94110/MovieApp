"use client";
import { useSelectedLayoutSegment, useParams, notFound } from "next/navigation";
import Form from "./Form/Form";
import styles from "./SearchSidebar.module.scss";

const SearchSidebar = ({
  genres,
}: {
  genres: { id: number; name: string }[];
}) => {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();

  const getSidebarTitle = () => {
    if (!segment) {
      return "Films";
    }
    const genre = genres.find((genre) => genre.id === Number(id));
    if (!genre) {
      return notFound();
    }
    return genre.name;
  };

  const title = getSidebarTitle();
  return (
    <div className={styles.sidebar}>
      <h1>Tous les &quot;{title}&quot;</h1>
      <Form />
    </div>
  );
};

export default SearchSidebar;
