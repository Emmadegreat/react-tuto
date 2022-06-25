import React from 'react'

function TodoItem (props){
  return (
        <div>
          {props.todo.text}
          <div className="Iconscontainer">
              <div />
          </div>
        </div>
      
  )
}

export default TodoItem
