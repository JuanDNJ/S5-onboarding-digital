import { initCardData } from "../../utils";
import ChangeStep from "./ChangeStep";
import StepsView from "./StepsView";
import styles from "./styles.module.css";

const Card = ({ currentCardData = initCardData, next = () => {} }) => {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
      <img className={styles.cardImg} src={currentCardData.image} alt={!currentCardData.image ? "Image not found" : "Card Image"} />
      </header>
      <section className={styles.cardHBody}>
        <h2 className={styles.title}>{!currentCardData.title ? 'Error' : currentCardData.title}</h2>
        <p className={styles.paragraf}>{!currentCardData.description ? 'Error' : currentCardData.description}</p>
      </section>
      <aside className={styles.cardActions}>
        <StepsView />
        <ChangeStep action={next}>Next</ChangeStep>
      </aside>
    </article>
  );
};

export default Card;
