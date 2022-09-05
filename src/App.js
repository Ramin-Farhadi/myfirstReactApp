import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'paractice for react learning',
      day: 'everyday',
      reminder: 'true',
    },
    {
      id: 2,
      text: 'Apply for the jobs',
      day: 'every day until you you find a satisfying job',
      reminder: 'true',
    },
    {
      id: 3,
      text: 'interview with Bob jones FORD',
      day: 'Wednesday at 3:30 pm ESD',
      reminder: 'true',
    },
  ])
  
  const deleteTask = (id) =>{
    console.log('Delete task ', id)
    setTasks(tasks.filter(task =>task.id !== id))
  }
  //Toggle reminder 
  const toggleReminder = (id) => {
      console.log('toggle task',id)
      setTasks(tasks.map((task)=>task.id ===id ? {...task,reminder:!task.reminder} : task))
  }
  
  return (
    <div className="container">
      <Header tasks={tasks} className="header" title="Task Tracker" onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
};

export default App;
