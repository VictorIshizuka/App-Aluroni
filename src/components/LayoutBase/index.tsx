import { Outlet } from "react-router-dom";

import styles from "./LayoutBase.module.scss";
import stylesTema from "../../styles/Theme.module.scss";

export const LayoutBase = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  );
};
