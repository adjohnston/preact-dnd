import React, { createClass } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Card from './card'

const DragArea = createClass({
  render() {
    return (
      <div>
        <Card />
        <Card />
      </div>
    )
  }
})

export default DragDropContext(HTML5Backend)(DragArea)
