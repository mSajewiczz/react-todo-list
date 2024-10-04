import React, {useState} from 'react';
import '../ToDoList/ToDoList.css';
import Search from '../Search/Search';
import AddTask from '../AddTask/AddTask';


export default function ToDoList() {

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
            <Search setSearch = {setSearch} deleteTask = {deleteTask} tasks = {tasks} search = {search}/>
        </div>

        <div className='input-box'>
        <AddTask setNewTask = {setNewTask} newTask = {newTask} addTask = {addTask} hanldeInputChange={hanldeInputChange}/>
        </div>
       </div>
        </>    
    )
}

// export default ToDoList;