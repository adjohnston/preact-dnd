import React, { createClass } from 'react'
import { render } from 'react-dom'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const App = createClass({
  render() {
    return (
      <div>
        I live
      </div>
    )
  }
})

render(DragDropContext(HTML5Backend)(App), document.querySelector('#app'))
