import Logo from "../../assets/logo.png";
import styles from "./Menu.module.scss";
import Search from "./Search";
import { useState } from "react";
import Filter from "./Filter";
import Order from "./Order";
import Itens from "./Itens";

export function Menu() {
  const [search, setSearch] = useState("");
  const [isFilter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState("");
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
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
