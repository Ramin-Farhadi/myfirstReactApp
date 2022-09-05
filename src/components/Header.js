import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Tasks from './Tasks';
const Header = ({ title,tasks,onDelete,onToggle }) => {
  const onClick = () => {
    console.log('button clicked');
  };

  return (
    <header>
      <div className="card">
        <div className="insideTheCard">
          <h1>{title}</h1>
          <Button onClick={onClick} title="Add" className="btn"></Button>
        </div>
          <Tasks tasks={tasks} onToggle={onToggle} onDelete= {onDelete}/>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: 'task tracker',
  desc: 'Default props',
};

export default Header;
