import React from 'react'

export default function Todo({ todo, checkCompleted, deleteItem }) {
  return (
    <li className="item-todo general-size">
      <span className={todo.isComplete ? 'completed' : ''} onClick={() => checkCompleted(todo.id)}>{todo.name}</span>
      <input
        type="text"
        defaultValue={todo.name}
        className="add-input hidden"
      />
      <span onClick={deleteItem}>
        <i className="fa fa-times-circle" aria-hidden="true"></i>
      </span>
    </li>
  )
}
