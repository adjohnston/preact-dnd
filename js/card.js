import React, { createClass } from 'react'
import { DragSource } from 'react-dnd'

const type = 'card'

const cardSource = {
  beginDrag() {
    return {}
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const Card = createClass({
  render() {
    return this.props.connectDragSource(
      <div>
        Card
      </div>
    )
  }
})

export default DragSource(type, cardSource, collect)(Card)
