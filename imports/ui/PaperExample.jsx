import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

export default React.createClass({

    componentDidMount: function () {
        // Instantiate the paperScope with the canvas element
        var myCanvas = document.getElementById('myCanvas');
        paper.setup(myCanvas);

        // Draw a circle in the center
        var width = paper.view.size.width;
        var height = paper.view.size.height;
        var circle = new paper.Shape.Circle({
            center: [width / 2, height / 2],
            fillColor: 'grey',
            radius: 43
        });

        // render
        paper.view.draw();
    },

    render: function () {
        return <canvas id="myCanvas" data-paper-resize></canvas>;
    }
});
