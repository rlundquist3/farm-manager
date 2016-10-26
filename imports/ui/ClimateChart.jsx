import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Line } from 'react-chartjs';
import { ClimateData } from '../api/climateData.js';

class ClimateChart extends Component {
  formatData() {
    return {
      labels: Array(this.props.size).fill(''),
      datasets: [
        {
          label: 'temperature',
          fillColor: 'rgba(250,195,168,0.5)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(250,195,168,1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          pointHighlightFill: 'rgb(255, 255, 255)',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: this.props.temp
        },
        {
          label: 'humidity',
          fillColor: 'rgba(167, 238, 250, 0.5)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(167, 213, 250, 1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          pointHighlightFill: 'rgb(255, 255, 255)',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: this.props.humidity
        },
      ],
    }
  }

  render() {
    return (
      <div className='chart'>
        <Line data={this.formatData()} className='unichart' options={{responsive:true}}/>
      </div>
    );
  }
}

ClimateData.propTypes = {
  size: PropTypes.number.isRequired,
  createdAt: PropTypes.array.isRequired,
  temp: PropTypes.array.isRequired,
  humidity: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('climateData');
  var climateData = ClimateData.find({}, {sort: { createdAt: -1 } }).fetch();
  return {
    size: climateData.length,
    createdAt: climateData.map((climate) => climate.createdAt),
    temp: climateData.map((climate) => climate.temp),
    humidity: climateData.map((climate) => climate.humidity),
  };
}, ClimateChart);
