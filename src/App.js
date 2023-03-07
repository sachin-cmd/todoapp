//App.js

import { React, useState } from "react";
import "./App.css";

import TodoInput from "./TodoInput.js";

import TodoList from "./TodoList";

function App() {
  // const [todos,setTodos]= useState("");

  const [editingIndex, setEditingIndex] = useState(-1);

  const [editedInput, setEditedInput] = useState([]);

  const [todoInput, setTodoInput] = useState([]);

  return (
    <>
      <div className="App">
        <TodoInput
          editingIndex={editingIndex}
          setTodoInput={setTodoInput}
          todoInput={todoInput}
          editedInput={editedInput}
          setEditingIndex={setEditingIndex}
          setEditedInput={setEditedInput}
        />

        <TodoList
          editingIndex={editingIndex}
          setTodoInput={setTodoInput}
          todoInput={todoInput}
          editedInput={editedInput}
          setEditingIndex={setEditingIndex}
          setEditedInput={setEditedInput}
        />
      </div>
    </>
  );
}

export default App;
