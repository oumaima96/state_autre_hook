import React, { useState } from "react"
import './App.css';
import TaskForm from './components/taskForm';
import TasksList from './components/TasksList/TasksList';

function App() {
  //const steps = ["Enter the task title", "click on add task"]
  let loading=false

  const [tasks, setTasks] = useState([
    {
      id:"1",
      title: "Learn html",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      duration: 60,
      details: { type: "IT", date: "2020-03-06" }
    },
    {
      id:"2",
      title: "Learn react",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      duration: 30,
      details: { type: "Marketing", date: "2020-03-06" }
    },
    {
      id:"3",
      title: "Learn node",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      duration: 50,
      details: { type: "IT", date: "2020-03-06" }
    }
  ])


  
  const [isVisible, setIsVisible]=useState(true)

  const [FormIsVisible, setFormIsVisible]=useState(false)
  
  const addTask=(title, duration,description,details)=>{
    setTasks(previousTasks => [
      ...previousTasks, 
      { id : previousTasks.length+1 ,title, duration : Number(duration),description : description ,details: details }
      ]
    )
    setFormIsVisible(!FormIsVisible)
  }

   const updateTask = (id, title, duration,description,details) => {
     const newTasks = tasks.map(task => task.id === id?({id,title, duration,description,details}): task)
     setTasks(newTasks)
   }
  //to use after to explain callback and memo
  //const memoizedCallback = useCallback(addTask, [])

   const deleteTask = (id) => {
     const newTasks=tasks.filter(task=>task.id!==id)
     setTasks(newTasks)
   }

  
  

   const toggleVisibility=()=>{
     setIsVisible(!isVisible)
   }

   const toggleForm=()=>{
    setFormIsVisible(!FormIsVisible)
  }

  return (
    <div className="app">
      <div className="toggle">
        <button onClick={toggleVisibility}>Toggle visibility</button>
        
      </div>
      <div className="toggleForm">
        <button className="toggle" onClick={toggleForm}>Toggle form</button>
      </div>
      <div>
      { FormIsVisible && 
        <TaskForm addTask={addTask} />
      }
        {loading ? (
          <div>Loading ... </div>
        ) : (
          isVisible && (
            <TasksList
              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          )
        )}
      </div>    
    </div>
    
  )
}

export default App;
