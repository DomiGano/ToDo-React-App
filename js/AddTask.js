import React, { useState } from "react";
import { API_KEY, API_URL } from "../api/constants";

export const AddTask = ({setTasks}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")

    const clearValues = () => {
        setDescription("")
        setTitle("")
    }

    const newTask = () => {
        const data = {title: title, description: description, status: false}

        if(title.length < 2) {
          setError("Tytuł powinien zawierać minimum 2 znaki")
          console.log(error)
        } else {
          setError("")
          console.log(error)

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
              }
            })
            .catch((err) => console.log(err));
        };
      }
            
      

    return (
      <>
        <div className="addTask">
            <h3 className="addTask__title">Nowe Zadanie</h3>
            <input className="addTask__input addTask__input-title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Tytuł"></input>
            <input className="addTask__input addTask__input-description" value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Opis"></input>
            <button className="addButton" onClick={() => newTask()}>Dodaj zadanie <i className="fa-solid fa-circle-plus"></i></button>
        </div>
        <div>
          <h4 style={error == "" ? {display: "none"} : {display: "block"}}>Błąd: {error}</h4>
        </div>
        </>
    )
}