import React, { useState, useRef, useEffect} from 'react'
import ToDoList from './TodoList'
import './style.css'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY ='todoApp.todos'

function App() {

  const [todos, setTodos] = useState([]) //useState returns an array of two elements; todos elements, setToDos is a function updating all the todos
  const todoNameRef = useRef()

  //this loadEeffect reloads our Todos
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) {setTodos(storedTodos)}
  }, [])

  //this allows to persist page reaload and keep local storage saved
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAdd(e){
    const name = todoNameRef.current.value
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, commplete: false}]
    })
    todoNameRef.current.value = null //we remove the inputed value to the already set Todo
  }

  function handleRemove(e) {
    
  }
  
  return ( //ToDoList is a React embedded component
    <>
      <ToDoList todos={todos} /> 
      <input style={{margin: 5}} ref={todoNameRef} type="text" />
      <button className='button-1' onClick={handleAdd}>Add</button>
      <button className='button-1' onClick={handleRemove}>Remove</button>
      <div style={{margin: 10}}>0 left toDo's</div>
    </>

  ); 
}

export default App;
