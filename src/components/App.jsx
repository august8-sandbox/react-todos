import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [{
        todoId: 1,
        description: 'Use React',
        flag: true,
      }],
      todoId: 0,
      initialValue: '',
    };
    this.addTodo = this.addTodo.bind(this);
    this.changeInitialValue = this.changeInitialValue.bind(this);
    this.changeCheckBox = this.changeCheckBox.bind(this);
  }

  addTodo(event) {
    if (event.key === 'Enter' && event.target.value) {
      const nextTodoId = this.state.todoId + 1;
      const newTodoList = this.state.todoList;
      newTodoList.push({
        todoId: nextTodoId,
        description: event.target.value,
        flag: false,
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

  changeCheckBox(event, index) {
    const newTodoList = this.state.todoList;
    // newTodoList[lpCnt].flag = newTodoList[lpCnt].flag ? false : true;
    newTodoList[index].flag = newTodoList[index].flag === false;
    this.setState({
      todoList: newTodoList,
    });
  }

  render() {
    return (
      <div>
        <Header
          title="Todos"
          placeholder="What needs to be done?"
          onEventCallBack={this.addTodo}
          addTodoValue={this.state.addTodoValue}
          initialValue={this.state.initialValue}
          onValueChange={this.changeInitialValue}
        />
        <TodoList
          todoList={this.state.todoList}
          onChangeCheckBox={this.changeCheckBox}
        />
      </div>
    );
  }
}
