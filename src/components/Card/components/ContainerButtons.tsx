import styles from "../css/styles.module.css";
import ChangeStep from "./ChangeStep";
import { Action } from "../../../types";
import { NextIcon } from "../../icons/NextIcon";
import { BackIcon } from "../../icons/BackIcon";

const ContainerButtons = ({
  actions,
  step,
}: {
  actions: { next: Action; back: Action };
  step: number;
}) => {
  return (
    <article className={styles.contentActions}>
      {step === 0 && (
        <ChangeStep action={actions.next} btnBack={false}>
          <NextIcon color={"#fff"} />
        </ChangeStep>
      )}
      {step === 1 && (
        <>
          <ChangeStep action={actions.back} btnBack>
            <BackIcon color={"#333"} />
          </ChangeStep>
          <ChangeStep action={actions.next} btnBack={false}>
            <NextIcon color={"#fff"} />
          </ChangeStep>
        </>
      )}
      {step === 2 && (
        <>
          <ChangeStep action={actions.back} btnBack>
            <BackIcon color={"#333"} />
          </ChangeStep>
        </>
      )}
    </article>
  );
};

export default ContainerButtons;
