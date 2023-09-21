import React, { useEffect, useState } from "react";
import { TaskRemoveButton } from "./TaskRemoveButton";
import { AddSubTask } from "./AddSubTask";
import { API_KEY, API_URL } from "../api/constants";


export const TaskList = ({tasks, setTasks}) => { 
    
    const getSubTask = (taskId) => {
            fetch(`${API_URL}/tasks/${taskId}/operations`, {
              headers: {
                Authorization: API_KEY,
              },
            })
              .then((r) => r.json())
              .then((data) => {
                if (data.error === false) {
                    return data.data;
                }
              })
              .catch(err => console.log(err));
    }

    return (
        
        <ul className="tasksList">
    {tasks.map((element) => {
       return <li className="task" key={element.id}>ZADANIE: {element.title} <br/> <span className="taskDescription">OPIS: <br/> {element.description}</span>
        <AddSubTask taskId={element.id}/>
       <TaskRemoveButton setTasks={setTasks} taskId={element.id}/>
        <ul>
        </ul>
       </li> 
       
    })}
    </ul>

    )
}