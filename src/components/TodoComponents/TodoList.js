import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => <Todo task={todo} toggleItem={props.toggleItem} />)}
    </div>
  );
};

export default TodoList;