import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Line } from 'react-chartjs';
import { ClimateData } from '../api/climateData.js';

export default class ClimateChart extends Component {

  formatData() {
    return {
      size: this.props.climateData.length,
      createdAt: this.props.climateData.map((climate) => climate.createdAt),
      temp: this.props.climateData.map((climate) => climate.temp),
      humidity: this.props.climateData.map((climate) => climate.humidity*100),
    }
  }

  formatClimate() {
    return {
      labels: Array(this.formatData().size).fill(''),
      datasets: [
        {
          label: 'temperature',
          backgroundColor: 'rgba(250, 195, 168, 0.5)',
          borderColor: 'rgba(250, 195, 168, 0.8)',
          pointColor: 'rgba(250, 195, 168, 1)',
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
        display: false,
        text: this.props.title,
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            id: 'y-axis-0',
            position: "left",
            scaleLabel: {
              display: true,
              labelString: 'temperature (F)',
            },
            ticks: {
              min: 60,
              max: 100,
              stepSize: 5
            }
          },
          {
            id: 'y-axis-1',
            position: "right",
            scaleLabel: {
              display: true,
              labelString: 'humidity (%)',
            },
            ticks: {
              min: 20,
              max: 100,
              stepSize: 10
            }
          }
        ]
      }
    }
  }

  render() {
    return (
      <Line data={this.formatClimate()} className='unichart' options={this.chartOptions()} />
    );
  }
}

ClimateChart.propTypes = {
  climateData: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
