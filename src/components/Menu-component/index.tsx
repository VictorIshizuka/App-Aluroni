import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import styles from "./Menu.module.scss";

export const Menu_component = () => {
  const routes = [
    { label: "Início", to: "/" },
    { label: "Menu", to: "/menu" },
  ];

  return (
    <nav className={styles.menu}>
      <img src={Logo} width={150} alt="" />
      <ul className={styles.menu__list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
