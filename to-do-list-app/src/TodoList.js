import React from 'react'
import ToDo from './Todo'

export default function ToDoList({todos}) {

    function setTodos(){

    }

    return (
        todos.map(todo=> {
            return <ToDo key={todo.id} todo={todo}/>
        })
    )
}
