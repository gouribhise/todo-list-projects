import React from 'react';

const TodoItem=({item,handleChange,clearItem})=>{
    const completedStyle={
         color:"#eb6864",
         textDecoration: "line-through"
         }
    const clear={
          disabled:"disabled",
          pointerEvents:"none",
          opacity:0.30
         }

return (
    <>
     {item.map((task)=>{
     return (
      <div class="row no-gutters">
      <div class="col-1">
      <label class="container">
      <input
                   type="checkbox"
                   checked= {task.completed}
                   onChange={() =>handleChange(task.id)} className="check"
      />
      <span class="checkmark"></span>

      </label>
      </div>
      <div class="col-6">
          <article key={task.id}>
              <h4 style={task.completed ? completedStyle: null}>{task.text}</h4>
          </article>
      </div>
      <div class="col-3">
          <button className="btn btn-primary delete"
            style={task.completed?null:clear}
           onClick={()=>clearItem(task.id)}>Delete</button>
      </div>
      </div>
    )
  })}
  </>
)
}

export default TodoItem
