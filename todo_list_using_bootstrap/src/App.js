
import './App.css';
import todosData from './todosData';
import TodoItem from './TodoItem';
import React,{useState} from 'react';
function App() {
  const[item,setItem]=useState(todosData);
   /* function to handle onChange even of checkboxes and flip their checked attribute*/
  const handleChange=(id)=>{
      let mapped = item.map(task => {
          return task.id === id ?
          { ...task, completed: !task.completed} : { ...task};
        });
    setItem(mapped);
    }


   /*function to get total number of non completed tasks*/
  const totalChecked=()=> {
        return item.filter(props => !props.completed).length;
      }


  /* function to delete particular item from list */
  const clearItem=(id)=>{
       const newTodos=item.filter((task)=>task.id!==id);
       setItem(newTodos)

    }




 return <main>
 <section className="container-fluid">
    <h3>Tasks To Complete: <span class="badge badge-primary"> <h4>{totalChecked()}</h4></span></h3>
   <TodoItem item={item} handleChange={handleChange} clearItem={clearItem}/>
 </section>
 </main>
}

export default App;
