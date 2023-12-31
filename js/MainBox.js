import React, { useEffect, useState } from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import { getTasks } from "../api/task";




export const MainBox = () => {
    const [tasks, setTasks] = useState([])


    useEffect(() => {
        getTasks(setTasks)
    })


    return (
        <>
        <div className="mainAnim" style={{ 
            margin: "2em auto",
            backgroundColor: '#8CBEB2',
            border: '5px solid #5C4B51',
            borderRadius: 10,
            width: '60%',
            height: 80,    
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '4px 3px 0px #fff',
        }}>
        

        <h1 style={{  display: 'flex', alignItems: 'center', color: '#fff', fontWeight: 700, fontSize: '2em'}}>Work in progress  <i  style={{  margin: '1em' ,color: '#5C4B51'}}className="fa-solid fa-code"></i></h1>
        </div>


        <div className="mainBox">
            <AddTask setTasks={setTasks}/>
            <div className="taskListBox" style={tasks.length <= 0 ? {display: "none"} : {display: "block"}}>
            <TaskList tasks={tasks} setTasks={setTasks}/>
            </div>
        </div>

    </>
    )
}