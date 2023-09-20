import React, { useState } from "react";
import { API_KEY, API_URL } from "../api/constants";
import { pushTask, getTasks} from "../api/task";

export const AddTask = ({setTasks}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const clearValues = () => {
        setDescription("")
        setTitle("")
    }

    const newTask = () => {
        const data = {title: title, description: description, status: false}

        fetch(`${API_URL}/tasks`, {
            method: "POST",
            headers: {
              Authorization: API_KEY,
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.error === false && typeof clearValues === "function") {
                clearValues();
                getTasks(setTasks);
              }
            })
            .catch((err) => console.log(err));
        };
            
      

    return (
        <div className="addTask">
            <h3 className="addTask__title">Nowe Zadanie</h3>
            <input className="addTask__input addTask__input-title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Tytuł"></input>
            <input className="addTask__input addTask__input-description" value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Opis"></input>
            <button className="addButton" onClick={title !== "" && description !== "" ? () => {newTask()} : null}>Dodaj zadanie <i className="fa-solid fa-circle-plus"></i></button>
        </div>
    )
}