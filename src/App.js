import './App.css';
import { useState } from 'react';

function App() {
  const initialList = [
    // "Zrobić zakupy",
    // "Zrobić pranie",
    // "Posprzątać w domu",
    // "Zrobić obiad",
  ]

  const [todo, setTodo] = useState(initialList);
  const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState(""); 

  function addTask(){
    if(newTodo.trim() !== ""){
        setTodo(t => [...t, newTodo]);
        setNewTodo("");
    }
}

  function deleteTask () {

  }



  return (
    <>
      <input 
        onChange={
          (event) => setSearch(event.target.value)
        }
      />
      { todo
      .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
      .map((item, index) => (
        <li key={index}> {item}</li>
      ))}

      <form>
        <input/>
        <button
          onClick={
            (event) => {addTask(); event.preventDefault(); setNewTodo(event.target.value)}
            
            // (event) => {
            //   addTask();
            //   event.preventDefault();
            //   (event) => setNewTodo(event.target.value);
            //   // console.log(event.target.previousElementSibling.value);
            // }
          }
        >
          Dodaj
        </button>
      </form>
    </>
  );
}

export default App;