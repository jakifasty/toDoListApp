import React from 'react'

export default function ToDo({ todo }) {
  return (
    <div className='list-element'>
        <label>
            <input type='checkbox' checked={todo.complete}></input>
            {todo.name}
        </label>
    </div>
  )
}
