import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Line } from 'react-chartjs';
import { AreaData } from '../api/areaData.js';

export default class InputChart extends Component {

  formatData() {
    return {
      size: this.props.data.length,
      createdAt: this.props.data.map((area) => area.createdAt),
      water: this.props.data.map((area) => area.water),
      energy: this.props.data.map((area) => area.energy),
      feed: this.props.data.map((area) => area.feed),
    }
  }

  formatInputs() {
    return {
      labels: Array(this.formatData().size).fill(''),
      datasets: [
        {
          label: 'feed',
          backgroundColor: 'rgba(167, 250, 210, 0.5)',
          borderColor: 'rgba(167, 250, 210, 0.8)',
          pointColor: 'rgba(167, 250, 210, 1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          data: this.formatData().feed,
          yAxisID: 'y-axis-0'
        },
        {
          label: 'water',
          backgroundColor: 'rgba(167, 238, 250, 0.5)',
          borderColor: 'rgba(167, 213, 250, 0.8)',
          pointColor: 'rgba(167, 213, 250, 1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          data: this.formatData().water,
          yAxisID: 'y-axis-1'
        },
        {
          label: 'energy',
          backgroundColor: 'rgba(250, 195, 168, 0.5)',
          borderColor: 'rgba(250, 195, 168, 0.8)',
          pointColor: 'rgba(250, 195, 168, 1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          data: this.formatData().energy,
          yAxisID: 'y-axis-2'
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
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'lbs',
            },
            ticks: {
              min: 0,
              max: 500,
              stepSize: 50
            }
          },
          {
            id: 'y-axis-1',
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: 'gal',
            },
            ticks: {
              min: 0,
              max: 100,
              stepSize: 10
            }
          },
          {
            id: 'y-axis-2',
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: 'kWh',
            },
            ticks: {
              min: 0,
              max: 100,
              stepSize: 10
            }
          },
        ]
      }
    }
  }

  render() {
    return (
      <Line data={this.formatInputs()} className='unichart' options={this.chartOptions()} />
    );
  }
}

InputChart.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
