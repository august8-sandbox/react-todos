import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import CheckBoxIcon from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxBlankIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';

export default class TodoList extends React.Component {
  handleCheckBoxClick(event, index) {
    this.props.onChangeCheckBox(event, index);
  }

  render() {
    const todoList = this.props.todoList.map((step, index) => {
      const todo = (
        <ListItem
          primaryText={step.description}
          leftIcon={step.flag ? <CheckBoxIcon /> : <CheckBoxBlankIcon />}
          onClick={event => this.handleCheckBoxClick(event, index)}
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
};
