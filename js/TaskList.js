import React from "react";
import { TaskRemoveButton } from "./TaskRemoveButton";

export const TaskList = ({tasks, setTasks}) => { 
    return (
        
        <ul className="tasksList">
    {tasks.map((element) => {
       return <li className="task" key={element.id}>ZADANIE: {element.title} <br/> <span className="taskDescription">OPIS: <br/> {element.description}</span>
        
       <TaskRemoveButton setTasks={setTasks} taskId={element.id}/></li> 
    })}
    </ul>

    )
}