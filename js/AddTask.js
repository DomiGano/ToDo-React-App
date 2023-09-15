import React from "react";

export const AddTask = () => {

    return (
        <div className="addTask">
            <h3 className="addTask__title">Nowe Zadanie</h3>
            <input className="addTask__input addTask__input-title" type="text" placeholder="Tytuł"></input>
            <input className="addTask__input addTask__input-description" type="text" placeholder="Opis"></input>
            <button className="addButton">Dodaj zadanie <i class="fa-solid fa-circle-plus"></i></button>
        </div>
    )
}