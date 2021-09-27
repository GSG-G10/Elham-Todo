import React,{useState} from 'react'
import { Input,Checkbox  } from 'antd';
import "./styles.css";

export default function InputToDo({addTaskToList}) {
    const [task, setTask] = useState({done:false,text:""});
   const  handleSubmit=(e)=>{
        e.preventDefault()
        addTaskToList(prevTask=>[...prevTask,task])
        setTask('')
    }
    return (
        <form id="input-todo" onSubmit={handleSubmit}>
        <Checkbox checked={task.done} onChange={(e)=>setTask({...task,done:e.target.checked})} />
        <Input placeholder="Add your task " value={task.text} onChange={(e)=>setTask({...task,text:e.target.value})} />
        </form>
    )
}
