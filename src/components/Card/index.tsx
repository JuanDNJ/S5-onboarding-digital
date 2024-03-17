import styles from "./styles.module.css";
import type { CardData, Action } from "../../types";
import ChangeStep from "./ChangeStep";
import Indicator from "./Indicator";
import { NextIcon } from "../icons/NextIcon";
import { BackIcon } from "../icons/BackIcon";

const Card = ({
  currentCardData,
  next,
  back,
  step,
}: {
  currentCardData: CardData;
  next: Action;
  back: Action;
  step: number;
}) => {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <img
          className={styles.cardImg}
          src={currentCardData.image}
          alt={!currentCardData.image ? "Image not found" : "Card Image"}
        />
      </header>
      <section className={styles.cardHBody}>
        <h2 className={styles.title}>
          {!currentCardData.title ? "Error" : currentCardData.title}
        </h2>
        <p className={styles.paragraf}>
          {!currentCardData.description ? "Error" : currentCardData.description}
        </p>
      </section>
      <aside className={styles.cardActions}>
        <Indicator />
        <div className={styles.contentActions}>
          {step === 0 && (
            <ChangeStep action={next} btnBack={false}>
              <NextIcon color={"#fff"} />
            </ChangeStep>
          )}
          {step === 1 && (
            <>
              <ChangeStep action={back} btnBack>
                <BackIcon color={"#333"} />
              </ChangeStep>
              <ChangeStep action={next} btnBack={false}>
                <NextIcon color={"#fff"} />
              </ChangeStep>
            </>
          )}
          {step === 2 && (
            <>
              <ChangeStep action={back} btnBack>
                <BackIcon color={"#333"} />
              </ChangeStep>
            </>
          )}
        </div>
      </aside>
    </article>
  );
};

export default Card;
