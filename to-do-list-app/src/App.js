import React, { useState, useRef, useEffect} from 'react'
import ToDoList from './TodoList'
import './style.css'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

  const [todos, setTodos] = useState([]) //useState returns an array of two elements; todos elements, setToDos is a function updating all the todos
  const todoNameRef = useRef()

  //this loadEeffect reloads our Todos (storing)
  useEffect(() => {
    console.log(localStorage)
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) {setTodos(prevTodos => 
      [...prevTodos, ...storedTodos]
    )}
  }, [])

  //this allows to persist page reaload and keep local storage saved (adding todo to local storage)
  useEffect(() => {
    console.log(localStorage)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) { //take id of the todo to toggle
    const newTodosList = [...todos] //create copy as not good to change a state variable
    const todo = newTodosList.find(todo => todo.id === id) //get 
    todo.complete = !todo.complete
    setTodos(newTodosList)
  }
  function handleAdd(e){
    const name = todoNameRef.current.value
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, commplete: false}]
    })
    todoNameRef.current.value = null //we remove the inputed value to the already set Todo
  }

  function handleRemoveComplete() {
    const newTodosList = todos.filter(todo => !todo.complete) //get new todo list by keeping
    // those todo that are not completed 
    setTodos(newTodosList)
  }
  
  return ( //ToDoList is a React embedded component
    <>
      <ToDoList todos={todos} toggleTodo={toggleTodo}/> 
      <input style={{margin: 5}} ref={todoNameRef} type="text" />
      <button className='button-1' onClick={handleAdd}>Add</button>
      <button className='button-1' onClick={handleRemoveComplete}>Remove completed</button>
      <div style={{margin: 10}}>{todos.filter(todo => !todo.complete).length} left toDo's</div>
    </>

  ); 
}

export default App;
