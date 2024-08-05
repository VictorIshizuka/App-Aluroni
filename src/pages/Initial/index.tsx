import { useNavigate } from "react-router-dom";

import menu from "../../data/menu.json";

import { IPrato } from "../../types/Prato";

import nossaCasaImage from "../../assets/nossa_casa.png";

import styles from "./Initial.module.scss";

export const Initial = () => {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);
  const navigate = useNavigate();
  function redirecionarParaDetalhes(prato: IPrato) {
    navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
  }

  return (
    <>
      <section>
        <h3 className={styles.title}>Recomendações da cozinha</h3>
        <div className={styles.recommended_s}>
          {recommendedDishes.map(item => (
            <div key={item.id} className={styles.recommended}>
              <div className={styles.recommended__image}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button
                className={styles.recommended__button}
                onClick={() => redirecionarParaDetalhes(item)}
              >
                Ver mais
              </button>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className={styles.title}>Nossa casa</h3>
        <div className={styles.ourHome}>
          <img src={nossaCasaImage} alt="casa do aluroni" />
          <div className={styles.ourHome__address}>
            Rua Vergueiro, 3185 <br />
            <br /> Vila Mariana - SP
          </div>
        </div>
      </section>
    </>
  );
};
