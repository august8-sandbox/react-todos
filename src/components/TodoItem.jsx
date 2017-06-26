import React, { PropTypes } from 'react';
import { ListItem, IconButton, IconMenu, MenuItem } from 'material-ui';
import { grey400 } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import CheckBoxIcon from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxBlankIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';

export default class TodoItem extends React.Component {
  handleCheckBoxClick(event, index) {
    this.props.onChangeCheckBox(event, index);
  }

  handleDeleteTodo(index) {
    this.props.onDeleteTodo(index);
  }

  render() {
    const rightIconMenu = (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <MoreVertIcon color={grey400} />
          </IconButton>
        }
      >
        <MenuItem
          primaryText="Delete"
          onTouchTap={() => this.handleDeleteTodo(this.props.indexNo)}
        />
      </IconMenu>
    );
    return (
      <ListItem
        key={this.props.indexNo}
        leftIcon={this.props.flag ? <CheckBoxIcon /> : <CheckBoxBlankIcon />}
        primaryText={this.props.primaryText}
        onTouchTap={event => this.handleCheckBoxClick(event, this.props.indexNo)}
        rightIconButton={rightIconMenu}
      />
    );
  }
}

TodoItem.propTypes = {
  indexNo: PropTypes.number,
  primaryText: PropTypes.string,
  flag: PropTypes.bool,
  onChangeCheckBox: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
