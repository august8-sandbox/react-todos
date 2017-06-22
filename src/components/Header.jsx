import React, { PropTypes } from 'react';

export default class Header extends React.Component {
  handleChange(event) {
    this.props.onEventCallBack(event);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          onKeyPress={event => this.handleChange(event)}
        />
      </div>

    );
  }
}

Header.propTypes = {
  placeholder: PropTypes.string,
  onEventCallBack: PropTypes.func,
};
