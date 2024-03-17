import {CardData } from "../../types";
import styles from "./styles.module.css";
const Indicator = ({
  indicators,
  step
}: {
  indicators: CardData[];
  step: number;
}) => {
  
  return (
    <div className={styles.contentSteps}>
      {indicators.map((res, index) => {
          let activeStep: React.ReactNode = (
            <span key={res.title} className={styles.step}></span>
          );
          if (index === step) {
            activeStep = (
              <span key={res.title} className={styles.stepSelected}></span>
            );
          }
          return activeStep;
        })}
    </div>
  );
};

export default Indicator;
