import React, { useState } from 'react'
import ToDoList from './TodoList'
import './style.css'

function App() {

  const [todos, setTodos] = useState([]) //useState returns an array of two elements; todos elements, setToDos is a function updating all the todos
  return ( //ToDoList is a React embedded component
    <>
      <ToDoList todos={todos} /> 
      <input style={{margin: 5}} type="text" />
      <button className='button-1'>Add</button>
      <button className='button-1'>Remove</button>
      <div style={{margin: 10}}>0 left toDo's</div>
    </>

  );
}

export default App;
