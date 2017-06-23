import React, { PropTypes } from 'react';

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
        <h1>{this.props.title}</h1>
        <input
          type="text"
          placeholder={this.props.placeholder}
          onKeyPress={event => this.handleChange(event)}
          onChange={event => this.valueChange(event)}
          value={this.props.initialValue}
        />
      </div>

    );
  }
}

Header.propTypes = {
  placeholder: PropTypes.string,
  onEventCallBack: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
  title: PropTypes.string,
};
