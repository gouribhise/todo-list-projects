import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import TodoList from './components/TodoList'
function App() {
  return (
    <div className="App todo">
      <br/>
      <Header/>
      <TodoList/> 
     </div>
  );
}

export default App;
