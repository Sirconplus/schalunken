import PropTypes from 'prop-types';
import React from 'react';
import crypto from "crypto";

export default class UuidWidget extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired
  };

  static defaultProps = {
    value: ''
  };

  render() {
    if (this.props.value === undefined || this.props.value === '') {
      this.props.value = crypto.randomBytes(16).toString("hex");
    }

    return (
      <input
        id={this.props.forID}
        className={this.props.classNameWrapper}
        type={'text'}
        value={this.props.value}
        onChange={() => {}}
        disabled
      />
    );
  }
}
