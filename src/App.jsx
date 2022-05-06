import React,{ useState, useCallback, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import FilterActive from './components/FilterActive'
import { v4 } from 'uuid'

function App() {
  const [textInput, setTextInput] = useState('')
  const [editingText, setEditingText] = useState('')
  const [status, setStatus] = useState('ALL')
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem('TODO APP'))
  })
  useEffect(() => {
    localStorage.setItem('TODO APP', JSON.stringify(todoList))
  }, [todoList])

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value)
  }, [])
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setTodoList([
      { id: v4(), name: textInput.trim(), isComplete: false },
      ...todoList
    ])
    setTextInput('')
  }, [textInput, todoList])
  const handleComplete = id => {
    setTodoList(prev => prev.map(todo =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo)
    )
  }
  const deleteTodo = id => {
    setTodoList([...todoList].filter(todo => todo.id !== id))
  }
  const handleEditChange = (e) => {
    setEditingText(e.target.value)
  }
  const editTodo = id => {
    const updateTodo = [...todoList].map(todo => {
      if (todo.id === id) {
        todo.name = editingText
      }
      return todo
    })
    setTodoList(updateTodo)
  }
  const handleCount = () => {
    const countTodo = todoList.filter(todo => todo.isComplete === false)
    return countTodo.length
  }
  const handleRemoveAllTodoCompleted = () => {
    const removeArr = todoList.filter(todo => todo.isComplete !== true)
    setTodoList(removeArr)
  }
  const filterByStatus = (todoList = [], status = '') => {
    switch (status) {
      case 'ACTIVE':
        return todoList.filter(todo => todo.isComplete !== true)
      case 'COMPLETED':
        return todoList.filter(todo => todo.isComplete === true)
      default:
        return todoList
    }
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
              value={textInput}
              onChange={onTextInputChange}
            />
          </form>
        </div>
        <TodoList
          todoList={filterByStatus(todoList, status)}
          checkCompleted={handleComplete}
          deleteTodo={deleteTodo}
          handleEditChange={handleEditChange}
          editTodo={editTodo}
        />
        <div className="stat general-size">
          <p><span className="number-item">{handleCount()}</span> item left</p>
          <FilterActive
            status={status}
            setStatus={setStatus}
          />
          <div className="corner">
            <button id="clear-completed" onClick={handleRemoveAllTodoCompleted} className="button-footer">
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
