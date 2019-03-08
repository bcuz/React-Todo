import React from 'react';

const TodoForm = props => {
  return (
    <form className="input-group" onSubmit={props.submit} >
      <input className="form-control" placeholder='add item' type='text' name='todo' 
      value={props.todo}
      onChange={props.change} />
      <div class="input-group-append">

        <button className="btn btn-outline-secondary" type='submit'>Add todo</button>
        <button className="btn btn-outline-secondary" onClick={props.click} >Clear Completed</button>
      </div>
    </form>
  );
};

export default TodoForm;