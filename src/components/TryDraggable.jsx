import Draggable from 'react-draggable'

const TryDraggable = () => {
  return (
    <Draggable>
      <div className="flex w-48 h-48 bg-gray-600 text-gray-100 justify-center items-center">
        <p>Drag me!</p>
      </div>
    </Draggable>
  )
}

export default TryDraggable