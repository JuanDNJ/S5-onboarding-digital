import {CardData } from "../../../types";

const Indicator = ({
  indicators,
  step
}: {
  indicators: CardData[];
  step: number;
}) => {
  
  return (
    <div className="contentSteps">
      {indicators.map((res, index) => {
          let activeStep: React.ReactNode = (
            <span key={res.title} className="step"></span>
          );
          if (index === step) {
            activeStep = (
              <span key={res.title} className="stepSelected"></span>
            );
          }
          return activeStep;
        })}
    </div>
  );
};

export default Indicator;
