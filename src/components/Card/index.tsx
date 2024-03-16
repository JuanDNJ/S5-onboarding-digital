import type { CardData } from "../../types";

const initCardData: CardData = {
  title: "",
  description: "",
  bgColor: "",
  image: "",
};

const Card = ({ currentCardData = initCardData }) => {
  return (
    <article>
      <h2>{currentCardData.title}</h2>
      <p>{currentCardData.description}</p>
    </article>
  );
};

export default Card;
