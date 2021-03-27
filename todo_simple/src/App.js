import React,{Component} from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'
class App extends Component{

  constructor(){
    super();
    this.state={
      todos:todosData
    }
    this.handleChange=this.handleChange.bind(this)
  this.handleClear=this.handleClear.bind(this)}


handleChange(id){
  console.log(id)
  this.setState(prev=>{
    const updatedTodos=prev.todos.map((todo)=>{
      if(todo.id===id){
        return{
          ...todo,
          completed:!todo.completed
        }
      }
      return todo

    })
    return{
      todos:updatedTodos
    }
  })
}


handleClear(id){
   this.setState(()=>{
      const newTodos=this.state.todos.filter((item)=>item.id!==id);



    return{
      todos:newTodos
    }
  })
}



  render() {
        const todoItems = this.state.todos.map(item =>

           <TodoItem key={item.id} item={item}
           handleChange={this.handleChange}
           handleClear={this.handleClear}/>)


        return (
          <>
          <div className="title">
            <h1 className="title-text">Simple Todo List</h1>
          </div>

            <div className="todo-list">
               {todoItems}
            </div>
            </>
        )
    }
}
export default App
