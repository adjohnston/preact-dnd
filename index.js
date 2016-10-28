import React, { createClass } from 'react'
import { render } from 'react-dom'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DragArea from 'js/drag-area'

const App = createClass({
  render() {
    return (
      <div>
        <p>
          The component below will not be rendered correctly. Instead it will render as: <pre><code>&lt;undefined>&lt;/undefined></code></pre>
        </p>

        <DragArea />
      </div>
    )
  }
})

render(<App />, document.querySelector('#app'))
