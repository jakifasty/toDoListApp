import React from 'react'

export default function ToDo({ todo, toggleTodo }) {

  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  return (
    <div className='list-element'>
        <label>
            <input type='checkbox' checked={todo.complete} onChange={handleTodoClick}></input>
            {todo.name}
        </label>
    </div>
  )
}
