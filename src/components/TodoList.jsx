import React, { PropTypes } from 'react';

export default class TodoList extends React.Component {
  handleCheckBoxClick(event, index) {
    this.props.onChangeCheckBox(event, index);
  }

  render() {
    const todoList = this.props.todoList.map((step, index) => {
      const todo = (
        <li key={index}>
          {step.description}
          <input
            type="checkbox"
            checked={step.flag}
            onClick={event => this.handleCheckBoxClick(event, index)}
          />
        </li>
      );
      return todo;
    });
    return (
      <div className="todo-list">
        <ol>{todoList}</ol>
      </div>
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
};
