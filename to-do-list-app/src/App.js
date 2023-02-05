import React from 'react'
import ToDoList from './ToDoList'
import './style.css'

function App() {
  return ( //ToDoList is a React embedded component
    <>
      <ToDoList /> 
      <input type="text" />
      <button>Add</button>
      <button>Remove</button>
      <div>0 left toDo's</div>
    </>

  );
}

export default App;
