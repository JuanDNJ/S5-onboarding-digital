import cardStyle from "./css/card.module.css";
import type { CardData, Action } from "../../types";
import Indicator from "./components/Indicator";
import ContainerButtons from "./components/ContainerButtons";
import ImageAnimation from "./components/ImageAnimation";


const Card = ({
  actions,
  step,
  cardData,
}: {
  actions: { next: Action; back: Action };
  step: number;
  cardData: CardData[];
}) => {
  return (
    <article className={cardStyle.card}>
      <header
        className={cardStyle.cardHeader}
        style={{ background: `${cardData[step].bgColor}` }}
      >
        <ImageAnimation step={step} src={cardData[step].image}/>
      </header>
      <section className={cardStyle.cardHBody}>
        <h2 className={cardStyle.title}>
          {cardData[step].title }
        </h2>
        <p className={cardStyle.description}>
          {!cardData[step].description ? "Error" : cardData[step].description}
        </p>
      </section>
      <footer className={cardStyle.cardActions}>
        <Indicator indicators={cardData} step={step} />
        <ContainerButtons length={cardData.length - 1} actions={actions} step={step} />
      </footer>
    </article>
  );
};

export default Card;
