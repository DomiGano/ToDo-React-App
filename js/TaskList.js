import React from "react";

export const TaskList = ({tasks}) => { 
    return (
        
        <ul className="tasksList">
    {tasks.map((element) => {
       return <li className="task" key={element.id}>ZADANIE: {element.title} <br/> <span className="taskDescription">OPIS: <br/> {element.description}</span></li> 
    })}
    </ul>

    )
}