import "./css/styles.css";
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
    <article className="card">
      <header
        className=""
        style={{ background: `${cardData[step].bgColor}` }}
      >
        <ImageAnimation step={step} src={cardData[step].image}/>
      </header>
      <section className="cardHBody">
        <h2 className="title">
          {!cardData[step].title ? "Error" : cardData[step].title}
        </h2>
        <p className="paragraf">
          {!cardData[step].description ? "Error" : cardData[step].description}
        </p>
      </section>
      <footer className="cardActions">
        <Indicator indicators={cardData} step={step} />
        <ContainerButtons length={cardData.length} actions={actions} step={step} />
      </footer>
    </article>
  );
};

export default Card;
