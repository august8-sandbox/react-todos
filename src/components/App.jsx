import React from 'react';
import Header from './Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [{
        todoId: 1,
        todoDescription: 'Use React',
      }],
      todoId: 0,
      initialValue: '',
    };
    this.addTodo = this.addTodo.bind(this);
    this.changeInitialValue = this.changeInitialValue.bind(this);
  }

  addTodo(event) {
    if (event.key === 'Enter' && event.target.value) {
      const nextTodoId = this.state.todoId + 1;
      const newTodoList = this.state.todoList;
      newTodoList.push({
        todoId: nextTodoId,
        todoDescription: event.target.value,
      });
      this.setState({
        todoList: newTodoList,
        todoId: nextTodoId,
        initialValue: '',
      });
    }
  }

  changeInitialValue(event) {
    const newInitialValue = event.target.value;
    this.setState({
      initialValue: newInitialValue,
    });
  }

  render() {
    const todoList = this.state.todoList.map((step, move) => {
      const todo = <li key={move}>{step.todoDescription}</li>;
      return todo;
    });

    return (
      <div>
        <Header
          placeholder="What needs to be done?"
          onEventCallBack={this.addTodo}
          addTodoValue={this.state.addTodoValue}
          initialValue={this.state.initialValue}
          onValueChange={this.changeInitialValue}
        />
        <div clssName="todo-list">
          <ol>{todoList}</ol>
        </div>
      </div>
    );
  }
}
