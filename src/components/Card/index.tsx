import styles from "./styles.module.css";
import type { CardData, Action } from "../../types";
import Indicator from "./Indicator";
import ContainerButtons from "./ContainerButtons";

const Card = ({
  cards,
  actions,
  step,
  cardData,
}: {
  cards: CardData[];
  actions: { next: Action; back: Action };
  step: number;
  cardData: CardData[];
}) => {


  return (
    <article className={styles.card}>
      {cards.map((card, index) => {
        if(index === step)
        return (
          <>
            <header
              className={styles.cardHeader}
              style={{ background: `${card.bgColor}` }}
            >

          <img
         
          className={styles.cardImg}
          src={card.image}
          alt={!card.image ? "Image not found" : "Card Image"}
        />
            </header>
            <section className={styles.cardHBody}>
              <h2 className={styles.title}>
                {!card.title ? "Error" : card.title}
              </h2>
              <p className={styles.paragraf}>
                {!card.description
                  ? "Error"
                  : card.description}
              </p>
            </section>
            <aside className={styles.cardActions}>
              <Indicator indicators={cardData} step={step} />
              <ContainerButtons actions={actions} step={step} />
            </aside>
          </>
        );
      })}
    </article>
  );
};

export default Card;
