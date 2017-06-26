import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class Header extends React.Component {
  handleChange(event) {
    this.props.onEventCallBack(event);
  }

  valueChange(event) {
    this.props.onValueChange(event);
  }

  render() {
    return (
      <div>
        <TextField
          floatingLabelText={this.props.placeholder}
          onKeyPress={event => this.handleChange(event)}
          onChange={event => this.valueChange(event)}
          value={this.props.initialValue}
          fullWidth
        /><br />
      </div>

    );
  }
}

Header.propTypes = {
  placeholder: PropTypes.string,
  onEventCallBack: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
};
