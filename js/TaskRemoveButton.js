import React from "react";
import { getTasks } from "../api/task";
import { API_KEY, API_URL } from "../api/constants";

export const TaskRemoveButton = ({taskId, setTasks}) => {

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

  return (
    <button className="removeButton" onClick={() => deleteTask(taskId)}><i className="fa-solid fa-trash"></i></button>
  )
}
