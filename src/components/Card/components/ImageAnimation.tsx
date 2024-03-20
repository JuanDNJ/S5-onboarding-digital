import { SwitchTransition, CSSTransition } from "react-transition-group"
import "../css/image-animation.css"
const ImageAnimation = ({step, src}:{step:number, src: string}) => {
    return (
       <SwitchTransition>
        <CSSTransition key={step} timeout={300} classNames={'fade'} unmountOnExit>
            <div className="container-image">
                <img className="image" src={src} alt={'Card Image'} />
            </div>
        </CSSTransition>
       </SwitchTransition>
    )
}
export default ImageAnimation;