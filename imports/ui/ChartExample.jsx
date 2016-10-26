import React, { Component, PropTypes } from 'react';
import {Line} from 'react-chartjs';

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(250,195,168,0.5)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(250,195,168,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

export default React.createClass({
    displayName: 'StatsWidget',
    render () {
        return (
            <div>
                <Line data={data} className='unichart' options={{responsive:true}}/>
            </div>
        );
    }
});
