import React, { Component, PropTypes } from 'react';

export default class ClimateData extends Component {
  render() {
    return (
      <li>temperature={this.props.climate.temp}F, humidity={this.props.climate.humidity}</li>
    );
  }
}

ClimateData.propTypes = {
  climate: PropTypes.object.isRequired,
};