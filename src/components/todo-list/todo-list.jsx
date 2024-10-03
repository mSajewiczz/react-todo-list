import React, {useState} from 'react';


function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function hanldeInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i)=> i !== index);
        setTasks(updatedTasks);
    }

    return (
        <div>
            <input type="text" placeholder='Wpisz zadanie...' value = {newTask} onChange={hanldeInputChange}/>
            <button

            onClick={addTask}
            
            >Dodaj</button>

            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <p>{task}</p>
                    <button className='delete' onClick = {() => deleteTask(index)}>Usun</button>
                </li>
                )}
            </ol>
        </div>
        
    )
}

export default ToDoList;