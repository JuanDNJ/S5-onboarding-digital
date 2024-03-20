
import { SwitchTransition, CSSTransition } from "react-transition-group";

const ChangeTramsition = ({src}:{src:string}) => {

console.log(src)

  return (
      <SwitchTransition>
        <CSSTransition
          key={src}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          className='fade'
        >
           <div className="cards_images">
              <img src={src} alt={src} />
           </div>
        </CSSTransition>
    </SwitchTransition>
  );
};
export default ChangeTramsition;
