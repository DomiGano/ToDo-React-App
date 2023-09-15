import React from "react";
import { AddTask } from "./AddTask";

export const MainBox = () => {
    return (
        <>
        <div style={{ 
            margin: "2em auto",
            backgroundColor: '#8CBEB2',
            border: '5px solid #5C4B51',
            borderRadius: 10,
            width: '60%',
            height: 80,    
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        

        <h1 style={{  display: 'flex', alignItems: 'center', color: '#fff', fontWeight: 700, fontSize: '2em'}}>Work in progress  <i  style={{  margin: '1em' ,color: '#5C4B51'}}class="fa-solid fa-code"></i></h1>
        </div>


        <div className="mainBox">
            <AddTask/>
        </div>


    </>
    )
}