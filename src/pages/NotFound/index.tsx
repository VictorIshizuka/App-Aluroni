import { useNavigate } from "react-router-dom";

import classNames from "classnames";

import styles from "./NotFound.module.scss";

import Image404 from "../../assets/not_found.svg";

import stylesTheme from "../../styles/Theme.module.scss";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTheme.container]: true,
      })}
    >
      <div className={styles.goBack}>
        <button onClick={() => navigate(-1)}>{"< Voltar"}</button>
      </div>
      <img src={Image404} alt="erro404" />
    </div>
  );
}
