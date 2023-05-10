import React from 'react'
import AddTodo from './AddTodo'
function TodoItem({para}) {
  return (
    <div className="container">
      <p>para</p>
      <button type="button"onClick={editTodo} class="btn text-light bg-primary">Edit</button>
      <button type="button"onClick={deleteTodo} class="btn text-light bg-primary">Delete</button>
    </div>
  )
}

export default TodoItem
