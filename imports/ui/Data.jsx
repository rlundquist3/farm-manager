import React, { Component, PropTypes } from 'react';

export default class Data extends Component {
  render() {
    return (
      <li>temperature={this.props.data.temp}F, humidity={this.props.data.humidity}</li>
    );
  }
}

Data.propTypes = {
  data: PropTypes.object.isRequired,
};
