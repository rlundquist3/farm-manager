import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Line } from 'react-chartjs';
import { AreaData } from '../api/areaData.js';

export default class InsectChart extends Component {

  formatData() {
    return {
      size: this.props.data.length,
      createdAt: this.props.data.map((area) => area.createdAt),
      insects: this.props.data.map((area) => area.insects),
      eggs: this.props.data.map((area) => area.eggs),
      dead: this.props.data.map((area) => area.dead),
      frass: this.props.data.map((area) => area.frass),
    }
  }

  formatWeights() {
    return {
      labels: Array(this.formatData().size).fill(''),
      datasets: [
        {
          label: 'insects',
          backgroundColor: 'rgba(167, 250, 210, 0.5)',
          borderColor: 'rgba(167, 250, 210, 0.8)',
          pointColor: 'rgba(167, 250, 210, 1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          data: this.formatData().insects,
          yAxisID: 'y-axis-0'
        },
        {
          label: 'eggs',
          backgroundColor: 'rgba(167, 238, 250, 0.5)',
          borderColor: 'rgba(167, 213, 250, 0.8)',
          pointColor: 'rgba(167, 213, 250, 1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          data: this.formatData().eggs,
          yAxisID: 'y-axis-0'
        },
        {
          label: 'dead',
          backgroundColor: 'rgba(250, 195, 168, 0.5)',
          borderColor: 'rgba(250, 195, 168, 0.8)',
          pointColor: 'rgba(250, 195, 168, 1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          data: this.formatData().dead,
          yAxisID: 'y-axis-0'
        },
        {
          label: 'frass',
          backgroundColor: 'rgba(194, 167, 250, 0.5)',
          borderColor: 'rgba(194, 167, 250, 0.8)',
          pointColor: 'rgba(194, 167, 250, 1)',
          pointStrokeColor: 'rgb(255, 255, 255)',
          data: this.formatData().frass,
          yAxisID: 'y-axis-0'
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
      responsive: true,
      scales: {
        yAxes: [
          {
            id: 'y-axis-0',
            position: "left",
            scaleLabel: {
              display: true,
              labelString: 'lbs',
            },
            ticks: {
              min: 0,
              max: 1000,
              stepSize: 100
            }
          },
        ]
      }
    }
  }

  render() {
    return (
      <Line data={this.formatWeights()} className='unichart' options={this.chartOptions()} />
    );
  }
}

InsectChart.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
