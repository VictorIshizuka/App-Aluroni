import React from "react";
import menu from "./itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useState, useEffect } from "react";

interface Props {
  search: string;
  isFilter: number | null;
  order: string;
}

export default function Itens(props: Props) {
  const [list, setList] = useState(menu);
  const { search, isFilter, order } = props;

  function onSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function onFilter(id: number) {
    if (isFilter !== null) return isFilter === id;
    return true;
  }

  function onOrder(newList: typeof menu) {
    switch (order) {
      case "portion":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd_people":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "price":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      item => onSearch(item.title) && onFilter(item.category.id)
    );
    setList(onOrder(newList));
  }, [search, isFilter, order]);

  return (
    <div className={styles.itens}>
      {list.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
