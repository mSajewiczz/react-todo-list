import React, {useState} from 'react';
import './todo-list.css';


function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [search, setSearch] = useState("");

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
        <>
       <div className='main'>
       <div>
        <input placeholder='Wyszukaj zadanie...' onChange={(event) => setSearch(event.target.value)}/>
        <ol>
        { tasks
      .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
      .map((task, index) => (
        <li key={index}>
                    <p>{task}</p>
                    <button className='delete' onClick = {() => deleteTask(index)}>Usun</button>
                </li>
    ))}
        </ol>
        </div>

        <div>
            <input type="text" placeholder='Wpisz zadanie...' value = {newTask} onChange={hanldeInputChange}/>
            <button

            onClick={addTask}
            
            >Dodaj</button>

            {/* <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <p>{task}</p>
                    <button className='delete' onClick = {() => deleteTask(index)}>Usun</button>
                </li>
                )}
            </ol> */}
        </div>
       </div>
        </>    
    )
}

export default ToDoList;