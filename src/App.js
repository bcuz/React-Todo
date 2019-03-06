import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

let todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
      todo: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let newTodo = {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    }

    alert('hi')
  }

  changeHandler = (e) => {
    this.setState({ todo: e.target.value });
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm todo={this.state.todo} submit={this.handleSubmit} change={this.changeHandler} />
      </div>
    );
  }
}

export default App;
