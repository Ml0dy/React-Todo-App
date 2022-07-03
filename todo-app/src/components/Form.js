import React from "react"

const Form = ({ setInputText, setTodos, todos, inputText, id, setId }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }
  const submitTodoHandler = (e) => {
    e.preventDefault()
    setTodos([...todos, { text: inputText, completed: false, id: id }])
    setId(id + 1)
    setInputText("")
  }

  return (
    <form>
      <input
        onChange={inputTextHandler}
        value={inputText}
        type="text"
        className="formInput"
      />
      <button onClick={submitTodoHandler} className="formButton">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="formSelect">
        <select name="todos" className="formFilter">
          <option value="all">All</option>
          <option value="complited">Complited</option>
          <option value="uncomplited">Uncomplited</option>
        </select>
      </div>
    </form>
  )
}

export default Form
