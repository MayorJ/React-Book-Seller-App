import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import './App.css';
import { v4 as uuidv4 } from 'uuid'


class App extends Component {
state = {
  todos: [
    {
      id: uuidv4(),
      title: 'Create the login page with React and Tailwind',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Create the sign-up page with React and Tailwind',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Weekly briefing of the team on developments on the project',
      completed: false
    }
  ]
}

markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo =>{
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  })})
  
}

delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}

addTodo = (title) => {
  const newTodo = {
    id: uuidv4(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo] })
}
render(){

  
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/About" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
