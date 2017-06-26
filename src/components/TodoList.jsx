import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  render() {
    const todoList = this.props.todoList.map((step, index) => {
      const todo = (
        <TodoItem
          lpCnt={index}
          indexNo={step.todoId}
          primaryText={step.description}
          flag={step.flag}
          onChangeCheckBox={this.props.onChangeCheckBox}
          onDeleteTodo={this.props.onDeleteTodo}
        />
      );
      return todo;
    });
    return (
      <List>
        {todoList}
      </List>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      todoId: PropTypes.number,
      description: PropTypes.string,
      flag: PropTypes.bool,
    }),
  ),
  onChangeCheckBox: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
