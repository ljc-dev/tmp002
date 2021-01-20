import { useRef, useState } from 'react';
import { CSSTransition, } from 'react-transition-group';
import "./transition.css"
const TryTransition = () => {
  const [showMsg, setShowMsg] = useState(false)
  const msgRef = useRef(null)
  return (
    <div className="mt-20">
      <button className="border border-gray-700 py-1 px-4" onClick={() => setShowMsg(!showMsg)}>click</button>
      <CSSTransition
        in={showMsg}
        timeout={300}
        unmountOnExit={true}
        classNames="fade"
        onEnter={(e) => console.log("enter", e)}
        onExit={(e) => console.log("exit", e)}
        nodeRef={msgRef}
      >
        <div ref={msgRef}>
          <p className="text-2xl m-8 p-8 bg-gray-100">appearing div</p>
          <button onClick={() => setShowMsg(false)}>close</button>
        </div>
      </CSSTransition>
    </div>
  );
}

export default TryTransition;