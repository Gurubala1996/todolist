import React from 'react'
import "./Todos.css"
import { useState,useRef,useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Todos() {
    const[todo,setTodo]=useState('');
    const[todos, setTodos]=useState([]);
    const[editId,seteditId]=useState(0);
const handlesubmit = (e) =>{
  e.preventDefault();
};
    const addtodo = () => {
      setTodos([...todos,{list : todo , id: Date.now(), status  : false}])
     console.log(todos)
     setTodo("") 
    }

    const Inputref=useRef('null')


    useEffect(()=>{
  Inputref.current.focus();
    
    });

    const onDelete= (id) =>{
 setTodos(todos.filter((todo) => todo.id !== id))
    }

    const onEdit = (id) =>{
   const  editTodo=todos.find((todo)=> todo.id === id )
   setTodo(editTodo.list)
   seteditId(editTodo.id)
   console.log(editTodo);
   
  
  
    }
 
  return (
    
<div className='container'>
    <h2>Todo-list</h2>
    <form className='form-group'  onSubmit={handlesubmit}>
        <input type="text" value={todo} ref={Inputref}  placeholder="Enter todos" class="form-control"  onChange={(event)=>setTodo(event.target.value)}/>
        <button onClick={addtodo} className='add'>Add</button>
    </form>
<div className='list'>
   <ul>
   {todos.map((todo)=>(

<li className="list-items">
 <div className="list-item-list" id={todo.status ? 'list-item':''}>{todo.list}</div> 
  <span>
    <FaEdit className="list-item-icons" 
    id="edit" 
    title="Edit"
    onClick={() =>onEdit(todo.id)}
    />
  <MdDelete className="list-item-icons"
   id="delete" 
   title="Delete"
   onClick={() => onDelete(todo.id)}
   />
  </span>

</li>
 


   ))

   } 

   </ul>
    </div>   

</div>


  )
}

export default Todos