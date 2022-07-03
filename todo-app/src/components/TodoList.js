import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todoContainer">
      <ul className="todoList">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
