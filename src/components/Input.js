import React,{useState} from 'react'
import { Input,Checkbox,message } from 'antd';
import "./styles.css";

export default function InputToDo({addTaskToList}) {
    const [task, setTask] = useState({done:false,text:""});
   const  handleSubmit=(e)=>{
        e.preventDefault()
        if(!task.text?.trim()){
            return message.info('There\'s no any Task');
        }
        addTaskToList(prevTask=>[...prevTask,task])
        setTask('')
         message.success('Tasks added successfully');
    }
    return (
        <form id="input-todo" onSubmit={handleSubmit}>
        <Checkbox checked={task.done} onChange={(e)=>setTask({...task,done:e.target.checked})} />
        <Input placeholder="Add your task " value={task.text} onChange={(e)=>setTask({...task,text:e.target.value})} />
        </form>
    )
}
