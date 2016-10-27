import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Line } from 'react-chartjs';
import { ClimateData } from '../api/climateData.js';

export default class ClimateChart extends Component {

  // getData() {
  //   var climateData = ClimateData.find({area: this.props.area}, {sort: { createdAt: -1 } }).fetch();
  //   this.data = {
  //     size: climateData.length,
  //     createdAt: climateData.map((climate) => climate.createdAt),
  //     temp: climateData.map((climate) => climate.temp),
  //     humidity: climateData.map((climate) => climate.humidity),
  //   };
  // }

  formatData() {
    return {
      size: this.props.climateData.length,
      createdAt: this.props.climateData.map((climate) => climate.createdAt),
      temp: this.props.climateData.map((climate) => climate.temp),
      humidity: this.props.climateData.map((climate) => climate.humidity),
    }
  }

  formatClimate() {
    return {
      labels: Array(this.formatData().size).fill(''),
      datasets: [
        {
          label: 'temperature',
          backgroundColor: 'rgba(250,195,168,0.5)',
          borderColor: 'rgba(250,195,168,0.8)',
          pointColor: 'rgba(250,195,168,1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          data: this.formatData().temp,
          yAxisID: 'y-axis-0'
        },
        {
          label: 'humidity',
          backgroundColor: 'rgba(167, 238, 250, 0.5)',
          borderColor: 'rgba(167, 213, 250, 0.8)',
          pointColor: 'rgba(167, 213, 250, 1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          data: this.formatData().humidity,
          yAxisID: 'y-axis-1'
        },
      ],
    }
  }

  chartOptions() {
    return {
      title: {
        display: true,
        text: this.props.title,
      },
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
  climateData: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  // size: PropTypes.number.isRequired,
  // createdAt: PropTypes.array.isRequired,
  // temp: PropTypes.array.isRequired,
  // humidity: PropTypes.array.isRequired,
};

// export default createContainer(() => {
//   Meteor.subscribe('climateData');
//   var climateData = ClimateData.find({area: }, {sort: { createdAt: -1 } }).fetch();
//   return {
//     size: climateData.length,
//     createdAt: climateData.map((climate) => climate.createdAt),
//     temp: climateData.map((climate) => climate.temp),
//     humidity: climateData.map((climate) => climate.humidity),
//   };
// }, ClimateChart);
