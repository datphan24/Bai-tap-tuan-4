import React,{ useState } from 'react'
import {TodoItem} from '../interface/interface'

export default function Todo({ editTodo, handleEditChange, todo, checkCompleted, deleteTodo }: TodoItem) {
  const [editing, setEditing] = useState<boolean>(true)
  const handleEdit = () => {
    setEditing(!editing)
  }
  const handleSubmitEditing = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      editTodo(todo.id)
      setEditing(true)
    }
  }
  return (
    <li className="item-todo general-size">
      {editing ?
        <span
          className={todo.isComplete ? 'completed' : ''}
          onClick={() => checkCompleted(todo.id)}
          onDoubleClick={handleEdit}
        >{todo.name}
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
