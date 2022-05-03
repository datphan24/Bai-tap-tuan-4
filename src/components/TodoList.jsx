import React from "react"
import Todo from "./Todo"

export default function TodoList({ todoList, checkCompleted, deleteItem }) {
  return (
    <ul className="list-todo">
      {todoList.map(todo => <Todo key={todo.id} checkCompleted={checkCompleted} deleteItem={deleteItem} todo={todo}/>)}
    </ul>
  )
}
