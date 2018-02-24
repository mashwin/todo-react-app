import React, { Component } from 'react';
import { AppHeader, TaskBar, TodoList } from './components';
import { Grid } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTodos, updateTodoText, addTodo, deleteTodo } from './actions';

class App extends Component {

  handleTextChange = (text) => {
    this.props.updateTodoText(text);
  }

  handleTextSubmit = () => {
    this.props.addTodo(this.props.todoText);
  }

  handleDeleteTodo = (text) => {
    this.props.deleteTodo(text);
  }

  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    return (
      <div>
        <AppHeader />
        <Grid>
          <TaskBar
            handleTextChange={this.handleTextChange}
            handleTextSubmit={this.handleTextSubmit}
          />
          {
            typeof this.props.todos !== 'undefined' && this.props.todos.length > 0
            && this.props.todos.map((todo, index) => (
              <TodoList
                key={index}
                text={todo.text}
                handleDeleteTodo={this.handleDeleteTodo}
              />
            ))
          }
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
    todoText: state.todos.text
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTodos: getTodos,
    updateTodoText: updateTodoText,
    addTodo: addTodo,
    deleteTodo: deleteTodo
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);