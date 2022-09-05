import React from 'react';
import { FaTimes } from 'react-icons/fa';
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      onDoubleClick={() => onToggle(task.id)}
      className={`task ${task.reminder ? 'reminder' : ''}`}
    >
      <div className="insideTask">
        <h3>{task.text}</h3>
        <p>{task.day}</p>
        <i onClick={() => onDelete(task.id)}>
          <FaTimes />
        </i>
      </div>
    </div>
  );
};

const hide = () => {};

export default Task;
