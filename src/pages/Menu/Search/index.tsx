import React from "react";
import styles from "./Search.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function onSearch({ search, setSearch }: Props) {
  return (
    <div className={styles.search}>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
