import { useRef } from 'react'
import Draggable from 'react-draggable'

const TryDraggable = () => {
  const nodeRef = useRef(null)
  const myBounds = {
    top: -100,
    left: -100,
    right: 100,
    bottom: 100,
  }

  function dragEventHandler(e, data) {
    const { node, x, y, deltaX, deltaY, lastX, lastY } = data
    console.log(node, x, y, deltaX, deltaY, lastX, lastY);
  }

  return (
    <div className="yohoho relative w-96 h-96 flex border-2 mt-20 mx-auto border-black">
      <Draggable axis="both" bounds={".yohoho"} cancel=".yahaha, .yihihi"
        defaultClassName="shadow-lg" defaultClassNameDragging="shadow-2xl" defaultClassNameDragged="ring"
        defaultPosition={{ x: 100, y: 100 }}
        disabled={false}
        grid={[25, 25]}
        handle=".handle"
        onMouseDown={(e) => console.log("mouse down")}
        onDrag={dragEventHandler}
        onStart={dragEventHandler}
        onStop={dragEventHandler}
        nodeRef={nodeRef}
        positionOffset={{ x: "50%", y: "50%" }}
      >
        <div ref={nodeRef} className="flex w-48 h-48 bg-gray-600 text-gray-100 justify-center items-center">
          <p className="handle">Drag me!</p>
          <p className="yahaha">Don't drag me!</p>
          <p className="yihihi">Don't drag me neither !</p>
        </div>
      </Draggable>
    </div >
  )
}

export default TryDraggable