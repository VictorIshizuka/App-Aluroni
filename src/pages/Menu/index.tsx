import { useState } from "react";

import Search from "./Search";
import Filter from "./Filter";
import Order from "./Order";
import Itens from "./Itens";

import styles from "./Menu.module.scss";

export function Menu() {
  const [search, setSearch] = useState("");
  const [isFilter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState("");
  return (
    <main>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menu__filter}>
          <Filter isFilter={isFilter} setFilter={setFilter} />
          <Order order={order} setOrder={setOrder} />
        </div>
        <Itens isFilter={isFilter} search={search} order={order} />
      </section>
    </main>
  );
}
