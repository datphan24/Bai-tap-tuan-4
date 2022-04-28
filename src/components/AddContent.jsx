import React,{ useState } from 'react'

function AddContent() {
  const [text, setText] = useState('')
  const [submitted, setSubmitted] = useState('');

  function handleChange(e) {
    setText(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(text);
    setText("");
  }
  return (
    <form action="" className="add-content" onSubmit={handleSubmit}>
      <input type="checkbox" name="" className="checkbox" />
      <input
        className="add-input"
        placeholder="Create a new todo..."
        autoComplete="off"
        value={text}
        onChange={handleChange}
      />
    </form>
  )
}
export default AddContent
