import React, { useState } from "react";

export const AddSubTask = () => {
    const [subTaskClick, setSubTaskClick] = useState(false)
    const [title , setTitle] = useState("")

    const subTaskForm = () => {
        if(subTaskClick == false) {
            setSubTaskClick(true)
        } else {
            setSubTaskClick(false)
        }
    }

    return (
        <>
        <button onClick={() => subTaskForm()} className="addSubTaskButton taskButton"><i className="fa-solid fa-plus"></i></button>
        <div style={subTaskClick == true ? {display: "block"} : {display: "none"}}>
            <div className="addSubTask--input_box">
            <input className="addSubTask--input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Tytuł"></input><button className="addSubTask--button">Dodaj <i className="fa-solid fa-circle-plus"></i></button>
            </div>
        </div>        

        </>
    )

}