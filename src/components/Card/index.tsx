import styles from "./styles.module.css";
import type { CardData, Action } from "../../types";
import Indicator from "./Indicator";
import ContainerButtons from "./ContainerButtons";

const Card = ({
  currentCardData,
  actions,
  step,
  cardData,
}: {
  currentCardData: CardData;
  actions: { next: Action; back: Action };
  step: number;
  cardData: CardData[];
}) => {
  const images = cardData.map((data, index) => {
    if (index === step)
      return (
        <img
          key={index}
          className={styles.cardImg}
          src={data.image}
          alt={!data.image ? "Image not found" : "Card Image"}
        />
      );
  });

  return (
    <article className={styles.card}>
      <header  className={styles.cardHeader} style={{background: `${currentCardData.bgColor}`}}>{images}</header>
      <section className={styles.cardHBody}>
        <h2 className={styles.title}>
          {!currentCardData.title ? "Error" : currentCardData.title}
        </h2>
        <p className={styles.paragraf}>
          {!currentCardData.description ? "Error" : currentCardData.description}
        </p>
      </section>
      <aside className={styles.cardActions}>
        <Indicator indicators={cardData} step={step} />
        <ContainerButtons actions={actions} step={step} />
      </aside>
    </article>
  );
};

export default Card;
