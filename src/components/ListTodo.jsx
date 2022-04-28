import React,{ useState } from 'react'
import AddContent from './AddContent'
function ListTodo() {
  const [todos, setTodos] = useState([])
  return (
    <ul className="list-todo">
      {todos.map((todo, index) =>
        <li key={index} className='item-todo general-size'>
          <span
            className=''
          >{todo}</span>
          <input
            type="text"
            defaultValue=""
            className="add-input hidden"
          />
          <span>
            <i className="fa fa-times-circle" aria-hidden="true"></i>
          </span>
        </li>)
      }
    </ul>
  )
}
export default ListTodo
