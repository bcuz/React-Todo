import React from 'react';
import './App.css';
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
  constructor() {
    super();
    this.state = {
      todos: todos,
      todo: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.todo !== '') {    

      // use prevState here
      let newTodo = {
        task: this.state.todo,
        id: Date.now(),
        completed: false
      }
  
      this.setState( prevState => {
        return { 
        todos: [...prevState.todos, newTodo ],
        todo: ''
      }
      }      );
    }
  }

  changeHandler = (e) => {
    this.setState({ todo: e.target.value });
  }

  clickHandler = (e) => {
    this.setState({ todos: [] });
  }

  toggleItem = () => {
    alert('hi')
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
        <TodoForm todo={this.state.todo} submit={this.handleSubmit} change={this.changeHandler} click={this.clickHandler} />
      </div>
    );
  }
}

export default App;
