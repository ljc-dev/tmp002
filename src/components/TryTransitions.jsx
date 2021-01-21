import React, { createRef, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './transition.css'

const initialItems = [
  { id: 100, name: "item0" },
  { id: 101, name: "item1" },
  { id: 102, name: "item2" },
  { id: 103, name: "item3" },
  { id: 104, name: "item4" },
]

const TryTransitions = () => {
  const [items, setItems] = useState(initialItems)

  function clickHandler(id) {
    setItems(items.filter(i => i.id !== id))
    console.log(items)
  }

  return (
    <TransitionGroup className="mt-24">
      {
        items.map(item => {
          const itemRef = createRef(null)
          return (
            <CSSTransition
              classNames="fade"
              key={item.id}
              timeout={300}
              nodeRef={itemRef}
            >
              <div ref={itemRef}>
                {item.name}
                <button onClick={() => clickHandler(item.id)}>close</button>
              </div>
            </CSSTransition>
          )
        }
        )
      }
    </TransitionGroup>
  )
}

export default TryTransitions

