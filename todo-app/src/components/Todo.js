import React from "react"

const Todo = ({ text, todo, setTodos, todos }) => {
  const deleteHandler = (e) => {
    setTodos(todos.filter((element) => element.id !== todo.id))
  }
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  return (
    <div className="todo">
      <li className={`todoItem ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="completeButton">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trashButton">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Todo
