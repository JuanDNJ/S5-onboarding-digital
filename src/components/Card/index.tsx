import styles from "./styles.module.css";
import type { CardData, Action } from "../../types";
import ChangeStep from "./ChangeStep";
import Indicator from "./Indicator";
import { NextIcon } from "../icons/NextIcon";
import { BackIcon } from "../icons/BackIcon";
import { useRef } from "react";

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
  const refImg = useRef(null);

  const images = cardData.map((data, index) => {
    if (index === step)
      return (
        <img
          key={index}
          ref={refImg}
          className={`${styles.cardImg}`}
          src={data.image}
          alt={!data.image ? "Image not found" : "Card Image"}
        />
      );
  });

  const handlerAnimation = () => {
    if (refImg && refImg.current) {
      console.log(refImg.current);
      // refImg.current.classList.add("active");
    }
  };

  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        {images}
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
        <Indicator indicators={cardData} step={step} />
        <div className={styles.contentActions}>
          {step === 0 && (
            <ChangeStep
              action={actions.next}
              btnBack={false}
              animation={handlerAnimation}
            >
              <NextIcon color={"#fff"} />
            </ChangeStep>
          )}
          {step === 1 && (
            <>
              <ChangeStep
                action={actions.back}
                btnBack
                animation={handlerAnimation}
              >
                <BackIcon color={"#333"} />
              </ChangeStep>
              <ChangeStep
                action={actions.next}
                btnBack={false}
                animation={handlerAnimation}
              >
                <NextIcon color={"#fff"} />
              </ChangeStep>
            </>
          )}
          {step === 2 && (
            <>
              <ChangeStep
                action={actions.back}
                btnBack
                animation={handlerAnimation}
              >
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
