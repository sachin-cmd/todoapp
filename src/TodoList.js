import React from 'react'

const TodoList = ({editingIndex,setTodoInput,todoInput,editedInput,edit,delet,handleEditChange,setEditingIndex,setEditedInput}) => {
  return (
    <div>
              <div className='list'>
      <ul className='todo-list'>
      {todoInput.map((td,index)=>(

        <li key={index}>
          {editingIndex===index?(
        <input type="text" placeholder="Enter things to get added" value={editedInput} onChange={(e)=>handleEditChange(e,index)} /> 

      ):(td)}

      
      
          {/* {td} */}
        <button className='del' onClick={()=>delet(index)}>Delete</button>

        {editingIndex!==index?<button className='update'  onClick={()=>edit(index,td)}>Edit
{/*           
          {editingIndex==index?"":"Edit"} */}
          </button>:<p></p>} 

        {/* // <button className='update'  onClick={()=>edit(index,null,td)}>
          
        //   {editingIndex==index?"":"Edit"}
        //   </button> */}

        </li>
      ))}

      </ul>
      </div>
      <p>Last Line</p>
      
    </div>
  )
}

export default TodoList
