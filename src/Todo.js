import React from 'react'
import './Todo.css'
import { ACTIONS } from './List'

function Todo({ todo, dispatch }) {
    const toggleHandler = function () {
        dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
    }
    const deleteHandler = function () {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
    }
    const toggle = todo.complete ? 'Undo' : 'Done'

    return (
      <div>
        {todo.agenda.trim().length > 0 && (
          <div className="main">
            <div
              className="items"
              style={{
                color: todo.complete ? 'green' : 'red',
                textDecoration: todo.complete ? 'line-through' : 'none',
              }}
            >
              <li>{todo.agenda}</li>
            </div>

            <button
              className="button completed"
              style={{
                backgroundColor: todo.complete ? '#f44336' : '#4CAF50',
                border: todo.complete ? '#f44336' : '#4CAF50',
              }}
              onClick={toggleHandler}
            >
              {toggle}
            </button>
            <button className="button delete" onClick={deleteHandler}>
              Delete
            </button>
          </div>
        )}
      </div>
    )
}

export default Todo
