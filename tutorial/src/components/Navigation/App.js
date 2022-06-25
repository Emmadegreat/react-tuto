import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Menu from './pages/Menu'
import React from 'react'
import { ReactDOM } from 'react-dom';
import TodoItem from './TodoItem';
import Todoform from './Todoform';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = { id: id, text: text, completed: false }
    let newTodos = [todo, ...todos]
    console.log(newTodos)
    setTodos(newTodos)
  };

  return (
    <div className="App_1">
      <Menu />
      <Todoform addTodo={ addTodo}/>
      {todos.map((todo) => {
        return (
          <TodoItem todo={todo} key={ todo.id}/>
        )
      }
      )
      }

    </div>
  )
}

export default App
