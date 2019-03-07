import React from 'react';

const Todo = props => {
  return (
    <div onClick={props.toggleItem}>{props.task}</div>
  );
};

export default Todo;