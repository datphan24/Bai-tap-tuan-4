import React,{ useState, useCallback, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import { v4 } from 'uuid'

function App() {
  const storageTodoList = JSON.parse(localStorage.getItem('TODO APP'))
  const [textInput, setTextInput] = useState('')
  const [todoList, setTodoList] = useState(storageTodoList)
  useEffect(() => {
    localStorage.setItem('TODO APP', JSON.stringify(todoList))
  }, [todoList])

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value)
  }, [])
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setTodoList([
      { id: v4(), name: textInput, isComplete: false },
      ...todoList
    ])
    setTextInput('')
  }, [textInput, todoList])
  const handleComplete = (id) => {
    setTodoList(prev => prev.map(todo =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo)
    )
  }
  return (
    <>
    <header>
        <h1>T O D O</h1>
      </header>
      <main>
        <div className="add-content">
          <form active='' onSubmit={handleSubmit}>
            <input type="checkbox" name="" className="checkbox" />
            <input
              type="text"
              className="add-input"
              placeholder="Create a new todo..."
              spellCheck="false"
              autoComplete="off"
              defaultValue={textInput}
              onChange={onTextInputChange}
            />
          </form>
        </div>
        <TodoList todoList={todoList} checkCompleted={handleComplete} />
        <div className="stat general-size">
          <p><span className="number-item">0</span> item left</p>
          <div className="filter">
            <button id="all" className="button-footer on">All</button>
            <button id="active" className="button-footer">Active</button>
            <button id="completed" className="button-footer">Completed</button>
          </div>
          <div className="corner">
            <button id="clear-completed" className="button-footer">
              Clear Completed
            </button>
          </div>
        </div>
      </main>
      <footer className="hidden">
        <p>Double-Click to edit a todo</p>
      </footer>
    </>
  )
}

export default App;
