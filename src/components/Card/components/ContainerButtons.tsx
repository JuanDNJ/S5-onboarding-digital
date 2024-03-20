import ChangeStep from "./ChangeStep";
import { Action } from "../../../types";
import { NextIcon } from "../../icons/NextIcon";
import { BackIcon } from "../../icons/BackIcon";
import cardStyle from "../css/card.module.css";

const ContainerButtons = ({
  actions,
  step,
  length,
}: {
  actions: { next: Action; back: Action };
  step: number;
  length: number;
}) => {

  
  return (
    <article className={cardStyle.contentActions}>
      {step > 0 || step === length  ? (
       <ChangeStep action={actions.back} btnBack>
       <BackIcon color={"#333"} />
     </ChangeStep>
      ): null}
      
      {step === 0 || step < length  ? (
         <ChangeStep action={actions.next} btnBack={false}>
         <NextIcon color={"#fff"} />
       </ChangeStep>
          
      ): null}
    </article>
  );
};

export default ContainerButtons;
