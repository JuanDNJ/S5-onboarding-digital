import { useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
const ChangeTramsition = () => {
  const [state, setState] = useState(false);
  const helloRef = useRef(null);
  const goodByRef = useRef(null);
  const nodeRef = state ? goodByRef : helloRef;

  return (
    <SwitchTransition>
      <CSSTransition
        key={state ? "Goodbye, world!" : "Hello world!"}
        nodeRef={nodeRef}
        addEventListener={(node, done) => node.addEventListener("transitionend", done, false)}
        className='fade'
      >
        <button ref={nodeRef} onClick={() => setState(state => !state)}>
        {state ? "Goodbye, world!" : "Hello world!"}
        </button>
      </CSSTransition>
    </SwitchTransition>
  );
};
export default ChangeTramsition;
