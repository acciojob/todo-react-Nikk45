
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [taskName, setTaskName] = useState('')
  const [taskList,setTaskList] = useState([])

  function addTask(){
    setTaskList([...taskList, {id:crypto.randomUUID(), name:taskName}])
    setTaskName('')
  }

  function deleteTask(id){
      setTaskList(taskList.filter((task)=>
        task.id!==id
      ))
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h3>To-Do List</h3>
        <div className="inputfield">
          <input type="text" value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
          <button onClick={addTask}>Add Todo</button>
        </div>
        
      <div>
        <ul>
        {
          taskList.map(task=>
            <li className="listItems" key={task.id}>
              <p>{task.name}</p><button onClick={()=>deleteTask(task.id)}>Delete</button>
            </li>)
        }
        </ul>
      </div>


    </div>
  )
}

export default App
