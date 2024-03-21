import "../css/transition.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const ChangeTramsition = ({ state }: { state: string }) => {
  return (
    <SwitchTransition>
      <CSSTransition
        key={state}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        className="fade"
      >
        <img src={state} alt="Card Image" />
      </CSSTransition>
    </SwitchTransition>
  );
};
export default ChangeTramsition;
