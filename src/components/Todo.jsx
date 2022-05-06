import React,{ useState } from 'react'

export default function Todo({ editTodo, handleEditChange, todo, checkCompleted, deleteTodo }) {
  const [editing, setEditing] = useState(true)
  const handleEdit = () => {
    setEditing(!editing)
  }
  const handleSubmitEditing = (e) => {
    if (e.key === 'Enter') {
      editTodo(todo.id)
      window.location.reload(true)
    } else {
      return todo.name
    }
  }
  return (
    <li className="item-todo general-size">
      {editing ?
        <span
          className={todo.isComplete ? 'completed' : ''}
          onClick={() => checkCompleted(todo.id)}
          onDoubleClick={handleEdit}>{todo.name}
        </span>
      : <input
        type="text"
        defaultValue={todo.name}
        className='add-input'
        onKeyUp={handleSubmitEditing}
        onChange={handleEditChange}
        />
      }
      <span onClick={() => deleteTodo(todo.id)}>
        <i className="fa fa-times-circle" aria-hidden="true"></i>
      </span>
    </li>
  )
}
