import React, { useState } from "react"
import "./Main.css"
import Form from "./Form"
import TodoList from "./TodoList"

const Main = () => {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(0)
  const [isImportant, setImportant] = useState(false)

  return (
    <div className="app">
      <h1>MlodyG Todo List in React</h1>
      <Form
        id={id}
        setId={setId}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        isImportant={isImportant}
        setImportant={setImportant}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  )
}

export default Main
