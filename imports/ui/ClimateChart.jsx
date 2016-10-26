import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Line } from 'react-chartjs';
import { ClimateData } from '../api/climateData.js';

class ClimateChart extends Component {

  formatClimate() {
    return {
      labels: Array(this.props.size).fill(''),
      datasets: [
        {
          label: 'temperature',
          backgroundColor: 'rgba(250,195,168,0.5)',
          borderColor: 'rgba(250,195,168,0.8)',
          pointColor: 'rgba(250,195,168,1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          data: this.props.temp,
          yAxisID: 'y-axis-0'
        },
        {
          label: 'humidity',
          backgroundColor: 'rgba(167, 238, 250, 0.5)',
          borderColor: 'rgba(167, 213, 250, 0.8)',
          pointColor: 'rgba(167, 213, 250, 1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          data: this.props.humidity,
          yAxisID: 'y-axis-1'
        },
      ],
    }
  }

  chartOptions() {
    return {
      scales: {
        yAxes: [
          {
            id: 'y-axis-0',
            position: "left",
            ticks: {
              min: 50,
              max: 100,
              stepSize: 10
            }
          },
          {
            id: 'y-axis-1',
            position: "right",
            ticks: {
              min: 0.3,
              max: 0.8,
              stepSize: 0.1
            }
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className='chart'>
        <Line data={this.formatClimate()} className='unichart' options={this.chartOptions()}/>
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
