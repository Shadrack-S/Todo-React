import React from 'react';
import { useState } from 'react';
import './index.css';


function App() {
  const [Todos,setTodos]=useState([])
  const [todo,setTodo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...Todos,{id:Date.now(), text:todo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       { Todos.map((object)=>{

       return( <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(object)
              setTodos(Todos.filter(object2=>{
                if(object2.id===object.id){
                  object2.status=e.target.checked
                }
                return object2
              }))
            }} value={object.status} type="checkbox" name="" id="" />
            <p>{object.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
        })}
{Todos.map((object)=>{
  if(object.status){
    return(<h1>{object.text}</h1> )
  }
  return null;
})

}


      </div>
    </div>
  );
}

export default App;
