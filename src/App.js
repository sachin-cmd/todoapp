//App.js

import {React,useState} from 'react';
import './App.css';


import TodoInput from './TodoInput.js';

import TodoList from './TodoList';


function App() {

  // const [todos,setTodos]= useState("");

  const [editingIndex,setEditingIndex]=useState(-1);

  const [editedInput,setEditedInput]=useState([]);

  const [todoInput,setTodoInput]=useState([]);
// const handleSubmit=(e)=>{


//   e.preventDefault();

//   // setTodoInput([...todoInput,todos]);
//   // setTodos("");

//   if (editingIndex === -1) {
//     // Add new todo item
//     setTodoInput([...todoInput, todos]);
//   } else {
//     // Update existing todo item
//     setTodoInput(todoInput.map((td, i) => (i === editingIndex ? editedInput : td)));
//     setEditingIndex(-1);
//     setEditedInput("");
//   }
//   setTodos("");
  



//   //////////////////////////////
// }
//   const handleChange=(e)=>{
       
//     setTodos(e.target.value)
//   }


  const delet=(index)=>{
    setTodoInput((prevInput)=>prevInput.filter((_,i)=>i!==index));

    setEditingIndex(-1);
  
  }

  const edit=(index,td)=>{
    setEditingIndex(index);
  //  setEditedInput(todoInput[index]);
  setEditedInput(td);
  }
  //////trying

//   setTodoInput(todoInput.map((td, i) => (i === editingIndex ? editedInput : td)));
//   setEditingIndex(-1);
//   setEditedInput("");

// setTodos("");


///////////////////

//  }

  const handleEditChange=(e,index)=>{


    setEditedInput(e.target.value);



  }
  return (
    <>
  
    <div className="App">

      <TodoInput 
      editingIndex={editingIndex}
      setTodoInput={setTodoInput}
      todoInput={todoInput}
      editedInput={editedInput}
      setEditingIndex={setEditedInput}
      setEditedInput={setEditedInput} />
{/* 
      <form onSubmit={handleSubmit} >
     <input type="text" placeholder="Enter things to get added" value={todos} onChange={handleChange} ></input>
    <button type="submit">{editingIndex === -1 ? "ADD" : "SUBMIT"}</button>

      </form> */}

{/* 
      //Todo List */}

      <TodoList
      editingIndex={editingIndex}
      setTodoInput={setTodoInput}
      todoInput={todoInput}
      editedInput={editedInput}
      setEditingIndex={setEditedInput}
      setEditedInput={setEditedInput}
      edit={edit}
      delet={delet}
      handleEditChange={handleEditChange}
      />
      {/* <div className='list'>
      <ul className='todo-list'>
      {todoInput.map((td,index)=>(

        <li key={index}>
          {editingIndex===index?(
        <input type="text" placeholder="Enter things to get added" value={editedInput} onChange={(e)=>handleEditChange(e,index)} /> 

      ):(td)}

      
      
        <button className='del' onClick={()=>delet(index)}>Delete</button>

        {editingIndex!==index?<button className='update'  onClick={()=>edit(index,null,td)}>Edit

          </button>:<p></p>} 

       

        </li>
      ))}

      </ul>
      </div>
      <p>Last Line</p> */}
      </div>
    
    </>
  );
}

export default App;
