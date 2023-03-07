//TodoInput.js
import { React, useState } from "react";

import "./TodoInput.css";

const TodoInput = ({
  editingIndex,
  setTodoInput,
  todoInput,
  editedInput,
  setEditingIndex,

  setEditedInput,
}) => {
  const [todos, setTodos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex === -1) {
      // Add new todo item
      setTodoInput([...todoInput, todos]);
    } else {
      // Update existing todo item

      let newVar = todoInput.map((td, i) =>
        i === editingIndex ? editedInput : td
      );
      setTodoInput(newVar);
      console.log("NewVar", newVar);
      console.log(todoInput, editingIndex, editedInput);

      setEditingIndex((pi) => -1);
      console.log(editingIndex, editedInput);
      setEditedInput((pin) => "");
    }
    setTodos("");
  };
  const handleChange = (e) => {
    setTodos(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter things to get added"
          value={todos}
          onChange={handleChange}
        ></input>
        <button type="submit">{editingIndex === -1 ? "ADD" : "SUBMIT"}</button>
      </form>
    </div>
  );
};

export default TodoInput;
