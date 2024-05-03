import React from "react";
import filter from "./filter.json";
import styles from "./Filter.module.scss";
import classNames from "classnames";

type IOption = (typeof filter)[0];

interface Props {
  isFilter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function onFilter({ isFilter, setFilter }: Props) {
  function selectFilter(option: IOption) {
    if (isFilter === option.id) return setFilter(null);
    return setFilter(option.id);
  }
  return (
    <div className={styles.filter}>
      {filter.map(option => (
        <button
          className={classNames({
            [styles.filter__filter]: true,
            [styles["filter__filter--ativo"]]: isFilter === option.id,
          })}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
