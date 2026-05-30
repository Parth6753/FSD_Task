import {use, useState} from "react";
function US8(){
    const [task,setTask]=useState("")
    const [todo,setToDo]=useState([])
    const addTask=()=>{
        if (task !== ""){
        setToDo([...todo,{id:Date.now(),name:task}])
        setTask("")}
    }
    const delTask=(id)=>{
        setToDo(todo.filter((task)=>task.id!==id))
    }
    return (
        <div>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={addTask}>Add</button>
        {
            todo.map((t)=>(
                <div key={t.id}>
                <h3>{t.name}</h3>
                <button onClick={()=>delTask(t.id)}>Delete</button>
                </div>
            ))
        }
        </div>
    )
}
export default US8