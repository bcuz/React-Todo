import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.submit} >
      <input placeholder='...todo' type='text' name='todo' 
      value={props.todo}
      onChange={props.change} />
      <button type='submit'>Add todo</button>
      <button onClick={props.click} >Clear Completed</button>
    </form>
  );
};

export default TodoForm;