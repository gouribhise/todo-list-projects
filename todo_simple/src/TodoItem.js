/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */

import React from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color:"red",
        textDecoration: "line-through"
    }

const test={
  disabled:"disabled",
  pointerEvents:"none",
  opacity:0.30
 }

    return (
        <div className="todo-item">
             <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)} className="check"
            />
            <p style={props.item.completed ? completedStyle: null} className="task">{props.item.text}</p>

            <button onClick={()=>props.handleClear(props.item.id)} className="btn complete"
              style={props.item.completed?null:test}
            >Clear</button>


</div>
    )
}

export default TodoItem
