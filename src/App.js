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

      this.setState( prevState => {

        let newTodo = {
          task: prevState.todo,
          id: Date.now(),
          completed: false
        }
  
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
    this.setState( prevState => {
      return { 
        todos: prevState.todos.filter(task => {
          return task.completed === false
        })
      }
    }
      );
  }

  // https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
  toggleItem = param => e => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(task => {
          if (task.id === param) {
            // do it this way cuz we want
            // a new arr of objs here.
            // and no mutating state
            // https://stackoverflow.com/questions/42286442/how-to-set-specific-property-value-of-all-objects-in-a-javascript-object-array

            // task.completed = !task.completed
            // ^ would result in an arr of undefineds
            return {
              // more concise
              ...task,
              // task: task.task,
              // id: task.id,
              completed: !task.completed
            };
          }
          
          return task;
        })
      };
    });
  }

  render() {
    return (
      <div className='container'>
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
        <TodoForm todo={this.state.todo} submit={this.handleSubmit} change={this.changeHandler} click={this.clickHandler} />
      </div>
    );
  }
}

export default App;
