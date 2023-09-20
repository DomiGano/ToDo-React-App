import React, { useEffect, useState } from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import { getTasks } from "../api/task";
import { API_KEY, API_URL } from "../api/constants";




export const MainBox = () => {
    const [tasks, setTasks] = useState([])


    useEffect(() => {
        getTasks(setTasks)
    }, [])

    const deleteTask = (taskId) => {
        fetch(`${API_URL}/tasks/${taskId}`, {
          method: "DELETE",
          headers: {
            Authorization: API_KEY,
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            getTasks(setTasks);
          })
          .catch((error) => {
            console.error("Błąd usuwania zadania:", error);
          });
      };
    

    //   For Dev Testing and Clear Data Base 
      const clearAll = () => {
        tasks.forEach(element => deleteTask(element.id))
    }


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