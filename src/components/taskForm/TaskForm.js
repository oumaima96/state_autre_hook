import React, { useState, useRef , memo} from "react"
import './TaskForm.css'
function TaskForm({addTask}) {
    const [title, setTitle]=useState("")
    const [duration, setDuration]=useState(0)
    const [description, setDescription]=useState("")
    const [details, setDetails]=useState({type : "",date : ""})
   
    const inputTitle = useRef(null)
    const handleAddTask=()=>{
      addTask(title, duration,description,details)
      setTitle("")
      setDuration(0)
      setDescription("")
      setDetails({type : "",date : ""})
      inputTitle.current.focus()
    }
  
    return (
      <div className="task-form">
        Name : <input
          type="text"
          name="title"
          ref={inputTitle}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        
        Duration : <input
          type="number"
          value={duration}
          name="duration"
          onChange={e => setDuration(e.target.value)}
        /><br/><br/>
        Description : <input
          type="text"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        Type : <input
          type="text"
          name="type"
          value={details.type}
          onChange={e => setDetails({type : e.target.value ,date : details.date})}
        /><br/><br/>
        Date : <input
          type="date"
          name="date"
          value={details.date}
          onChange={e => setDetails({type : details.type ,date : e.target.value})}
        />
        <button className="button" onClick={handleAddTask}>
          Add a task
        </button>
      </div>
    )
}
export default memo(TaskForm)