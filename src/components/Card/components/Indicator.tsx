import {CardData } from "../../../types";
import indicadtorStyle from "../css/indicators.module.css"
const Indicator = ({
  indicators,
  step
}: {
  indicators: CardData[];
  step: number;
}) => {
  
  return (
    <div className={indicadtorStyle.contentSteps}>
      {indicators.map((res, index) => {
          let activeStep: React.ReactNode = (
            <span key={res.title} className={indicadtorStyle.step}></span>
          );
          if (index === step) {
            activeStep = (
              <span key={res.title} className={indicadtorStyle.stepSelected}></span>
            );
          }
          return activeStep;
        })}
    </div>
  );
};

export default Indicator;
