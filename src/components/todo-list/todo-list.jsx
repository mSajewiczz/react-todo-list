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
       <div className='welcome-header'>
       <h1>To Do List</h1>
       <p>Poniżej możesz dodać lub wyszukać swoje zadania</p>
       </div>
       <div className='input-box'>
        <input placeholder='Wyszukaj zadanie...' onChange={(event) => setSearch(event.target.value)}/>
        <ol>
        { tasks
      .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
      .map((task, index) => (
        <li key={index}>
                    <p className='task-text'>{task}</p>
                    <button className='delete' onClick = {() => deleteTask(index)}>Usun</button>
                </li>
    ))}
        </ol>
        </div>

        <div className='input-box'>
            <input type="text" placeholder='Wpisz zadanie...' value = {newTask} onChange={hanldeInputChange}/>
            <button

            onClick={addTask}
            className='add-btn'
            
            >Dodaj</button>
        </div>
       </div>
        </>    
    )
}

export default ToDoList;