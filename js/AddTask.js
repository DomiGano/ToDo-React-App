import React, { useState } from "react";

export const AddTask = ({setTasks}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const newTask = () => {
            setTasks(prevTasks => [...prevTasks, {title: title, description: description}])
            setTitle("")
            setDescription("")
    }

    return (
        <div className="addTask">
            <h3 className="addTask__title">Nowe Zadanie</h3>
            <input className="addTask__input addTask__input-title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Tytuł"></input>
            <input className="addTask__input addTask__input-description" value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Opis"></input>
            <button className="addButton" onClick={title !== "" && description !== "" ? () => {newTask()} : null}>Dodaj zadanie <i className="fa-solid fa-circle-plus"></i></button>
        </div>
    )
}