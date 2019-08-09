import React, { Component } from 'react';
import TodosItem from './TodosItem';
import PropTypes from 'prop-types';
class Todos extends Component {
  
  render() {
    return this.props.todos.map((todo)=>(
        <TodosItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}
// PropTypess
Todos.propTypes = {
    todos:PropTypes.array.isRequired
}

export default Todos;
