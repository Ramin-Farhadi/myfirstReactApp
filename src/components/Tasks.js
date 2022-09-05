import React from 'react'
import Task from './Task'
const Tasks = ({tasks, onDelete,onToggle}) => {

    return (
        
    <div>
        {tasks.map((task)=>(
           <div key={task.id}> 
            <Task task={task} onToggle={onToggle} onDelete={onDelete}/>
            </div>
        ))}    
            <h5>{tasks.length < 1 ? 'no tasks to show' : ''}</h5>
    
    </div>
  )
}

export default Tasks