import React from 'react'
import Task from '../task/Task';
import './TasksList.css'
export default function TasksList({tasks, deleteTask, updateTask}) {


    return (
      <div className="tasks-list">
        <div>
          { tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                duration={task.duration}
                description={task.description}
                details={task.details}
                deleteTask={deleteTask}
                updateTask={updateTask}
              >
                
                <div>Hello</div>
                <div>Hi</div>
              </Task>
            ))}
        </div>
      </div>
    )
}