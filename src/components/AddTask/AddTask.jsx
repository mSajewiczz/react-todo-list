export default function AddTask({hanldeInputChange, newTask, addTask}) {
    
    return (
        <>
             <input type="text" placeholder='Wpisz zadanie...' value = {newTask} onChange={hanldeInputChange}/>
            <button

            onClick={addTask}
            className='add-btn'
            
            >Dodaj</button>
        </>
    )
   
}