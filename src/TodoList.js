import React from "react";

const TodoList = ({
  editingIndex,
  setTodoInput,
  todoInput,
  editedInput,
  setEditingIndex,
  setEditedInput,
}) => {
  const delet = (index) => {
    setTodoInput((prevInput) => prevInput.filter((_, i) => i !== index));

    setEditingIndex(-1);
  };

  const edit = (index, td) => {
    setEditingIndex(index);
    //  setEditedInput(todoInput[index]);
    setEditedInput(td);
    //  console.log("inside edit", editedInput);
  };

  const handleEditChange = (e, index) => {
    setEditedInput(e.target.value);
  };

  return (
    <div>
      <div className="list">
        <ul className="todo-list">
          {todoInput.map((td, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <input
                  type="text"
                  placeholder="Enter things to get added"
                  value={editedInput}
                  onChange={(e) => handleEditChange(e, index)}
                />
              ) : (
                td
              )}

              <button className="del" onClick={() => delet(index)}>
                Delete
              </button>

              {editingIndex !== index ? (
                <button className="update" onClick={() => edit(index, td)}>
                  Edit
                </button>
              ) : (
                <p></p>
              )}
            </li>
          ))}
        </ul>
      </div>
      <p>Last Line</p>
    </div>
  );
};

export default TodoList;
