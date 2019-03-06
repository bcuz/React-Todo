import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.submit} >
      <input type='text' name='todo' value={props.todo} onChange={props.change} />
      <button type='submit'>Add todo</button>
    </form>

  );
};

export default TodoForm;