import React, { useState } from "react";
import { API_KEY, API_URL } from "../api/constants";

export const AddSubTask = ({taskId}) => {
    const [subTaskClick, setSubTaskClick] = useState(false)
    const [title , setTitle] = useState("")

    const subTaskForm = () => {
        if(subTaskClick == false) {
            setSubTaskClick(true)
        } else {
            setSubTaskClick(false)
        }
    }

    const createSubTask = () => {
        const data = {description: title, timeSpent: 0}

        fetch(`${API_URL}/tasks/${taskId}/operations`, {
            method: "POST",
            headers: {
              Authorization: API_KEY,
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.error === false) {
                setTitle("");
              }
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
        <button onClick={() => subTaskForm()} className="addSubTaskButton taskButton"><i className="fa-solid fa-plus"></i></button>
        <div style={subTaskClick == true ? {display: "block"} : {display: "none"}}>
            <div className="addSubTask--input_box">
            <input className="addSubTask--input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Tytuł"></input>
            <button onClick={() => {createSubTask()}} className="addSubTask--button">Dodaj <i className="fa-solid fa-circle-plus"></i></button>
            </div>
        </div>        

        </>
    )

}