export default function Search({setSearch, deleteTask, tasks, search}) {
    
    return (
        <>
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
        </>
    )
   
}