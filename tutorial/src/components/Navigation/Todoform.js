import './navbar.css'

import React, { useState }from 'react'

function Todoform (props) {
  
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo(input);
    setInput("");
  }

  return (
    <div className="outer__box">
      <div className="box">
        <div className="text__end">
          <h1>React Todo APP</h1>
          <p>Add a new Todo</p>
        </div>
        

      </div>
      <form className="form" method="post" onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          name="item"
          onChange={(event) => setInput(event.target.value)}
          placeholder="Add a Todo"
        />
        <button
          type="submit"
          className="btn-primary">Add
        </button>
      </form>
    </div>
  )
}

export default Todoform
