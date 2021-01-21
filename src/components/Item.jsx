import { useRef } from "react"
import { CSSTransition } from "react-transition-group"


const Item = ({ item, clickHandler }) => {
  const myRef = useRef(null)
  return (
    <CSSTransition
      classNames="fade"
      key={item}
      timeout={300}
      nodeRef={myRef}
    >
      <div ref={myRef} >
        {item}
        <button onClick={clickHandler}>close</button>
      </div>
    </CSSTransition>
  )
}

export default Item