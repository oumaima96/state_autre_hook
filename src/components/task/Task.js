import React, {useState} from "react"
import PropTypes from "prop-types"
import "./Task.css"
export default function Task({
  id,
  title,
  duration,
  description,
  details,
  deleteTask,
  updateTask
}) {
  const [updateMode, setUpdateMode] = useState(false)
    const [titleToUpdate, setTitleToUpdate] = useState(title)
    const [durationToUpdate, setDurationToUpdate] = useState(duration)
    const [descriptionToUpdate, setDescriptionToUpdate] = useState(description)
    const [detailsToUpdate, setDetailsToUpdate] = useState({type : details.type ,date : details.date})
 
     const handleUpdateTask = () => {
       updateTask(id, titleToUpdate, durationToUpdate,descriptionToUpdate,detailsToUpdate)
       setUpdateMode(false)
     }
  return (
    <div className="task">
      {!updateMode ? (
        <>
          <div>
            <div className="title">
              {title} ({duration} mn)
            </div>
              <br/>
              {details.type} - {details.date}
              <br/> <br/>
              {description}
          </div>
          <div className="actions">
            <div>
              <button onClick={() => deleteTask(id)}>delete</button>
              <button onClick={()=>setUpdateMode(true)}>update</button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <input
            type="text"
            name="title"
            value={titleToUpdate}
            onChange={e => setTitleToUpdate(e.target.value)}
          />
          <input
            type="number"
            value={durationToUpdate}
            name="duration"
            onChange={e => setDurationToUpdate(e.target.value)}
          />
          <input
            type="text"
            name="description"
            value={descriptionToUpdate}
            onChange={e => setDescriptionToUpdate(e.target.value)}
          />
           <input
            type="text"
            name="type"
            value={detailsToUpdate.type}
            onChange={e => setDetailsToUpdate({type : e.target.value ,date : details.date})}
          />
           <input
            type="date"
            name="date"
            value={detailsToUpdate.date}
            onChange={e => setDetailsToUpdate({type : details.type ,date : e.target.value})}
          />
          <button className="button" onClick={handleUpdateTask}>
            Update a task
          </button>
        </div>
      )}
    </div>
  )
}
Task.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number,
}

Task.defaultProps = {
  duration: 30
}
