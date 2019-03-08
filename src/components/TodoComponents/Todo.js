import React from 'react';

const Todo = props => {
  let completed = props.task.completed ? "completed" : "";
  return (
    <div className={`task ${completed}`} 
    onClick={props.toggleItem(props.task.id) }>{props.task.task}</div>
  );
};

export default Todo;