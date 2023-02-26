import React, { useState, useReducer } from 'react'
import Todo from './Todo'
import './List.css'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
}
const newTodo = function (agenda) {
  return { id: Date.now(), agenda: agenda, complete: false }
}
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.agenda)]

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id)
    default:
      return todos
  }
}

function List() {
  const [todos, dispatch] = useReducer(reducer, [])

  const [agenda, setAgenda] = useState('')

  const submitHandler = function (e) {
      e.preventDefault()
      
      dispatch({ type: ACTIONS.ADD_TODO, payload: { agenda: agenda } })
      
    setAgenda('')
  }
    const inputChangeHandler = function (e) {
            setAgenda(e.target.value)
    }  
  
  return (
    <div >
          <form onSubmit={submitHandler}>
              <h1>To-Do List </h1>
              <input type="text" placeholder='add your to-do' value={agenda} onChange={inputChangeHandler}></input>
              <button className='add' onClick={submitHandler}>+</button>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </div>
  )
}

export default List
