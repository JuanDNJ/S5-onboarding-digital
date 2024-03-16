import {initCardData} from "../../utils"
import ChangeStep from "./ChangeStep";

const Card = ({ currentCardData = initCardData, next = () => {}}) => {
  return (
    <article>
      <h2>{currentCardData.title}</h2>
      <p>{currentCardData.description}</p>
      <ChangeStep action={next}>
        Next
      </ChangeStep>
    </article>
  );
};

export default Card;
