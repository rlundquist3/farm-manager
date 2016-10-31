import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

export default class Floorplan extends Component {

    componentDidMount() {
        var floorplanCanvas = document.getElementById('floorplanCanvas');
        paper.setup(floorplanCanvas);

        const BUILDING_SCALING_FACTOR = 50;

        var width = paper.view.size.width;
        var height = paper.view.size.height;

        var floorplan = {
          size: {
            length: 3*BUILDING_SCALING_FACTOR,
            width: 2*BUILDING_SCALING_FACTOR,
            walls: 3,
          },
          position: {
            x: 0,
            y: 0,
          },

          drawOutline: function() {
            var outline = new paper.Shape.Rectangle({
              topLeft: [this.position.x, this.position.y],
              bottomRight: [this.position.x+this.size.width, this.position.y+this.size.length],
              strokeColor: 'black',
            });
          },

          drawRooms: function() {
            var rooms = {
              incubation: new paper.Shape.Rectangle({
                topLeft: [this.position.x+this.size.walls, this.position.y+3*this.size.walls+0.55*this.size.length],
                bottomRight: [this.position.x+this.size.walls+0.45*this.size.width, this.position.y+3*this.size.walls+0.65*this.size.length],
                strokeColor: 'black',
              }),
              growout1: new paper.Shape.Rectangle({
                topLeft: [this.position.x+this.size.walls, this.position.y+this.size.walls+0.4*this.size.length],
                bottomRight: [this.position.x+this.size.walls+0.45*this.size.width, this.position.y+2*this.size.walls+0.55*this.size.length],
                strokeColor: 'black',
              }),
              growout2: new paper.Shape.Rectangle({
                topLeft: [this.position.x+this.size.walls, this.position.y+this.size.walls],
                bottomRight: [this.position.x+this.size.width-this.size.walls, this.position.y+0.4*this.size.length],
                strokeColor: 'black',
              }),
              breeding: new paper.Shape.Rectangle({
                topLeft: [this.position.x+0.55*this.size.width, this.position.y+this.size.walls+0.4*this.size.length],
                bottomRight: [this.position.x+this.size.width-this.size.walls, this.position.y+2*this.size.walls+0.6*this.size.length],
                strokeColor: 'black',
              }),
            };

            var text = {
              incubation: new paper.PointText({
                point: rooms.incubation.position,
                content: 'Incubation Area',
                fillColor: 'black',
                fontSize: '5',
              }),
              growout1: new paper.PointText({
                point: rooms.growout1.position,
                content: 'Growout Area 1',
                fillColor: 'black',
                fontSize: '5',
              }),
              growout2: new paper.PointText({
                point: rooms.growout2.position,
                content: 'Growout Area 2',
                fillColor: 'black',
                fontSize: '5',
              }),
              breeding: new paper.PointText({
                point: rooms.breeding.position,
                content: 'Breeding Area',
                fillColor: 'black',
                fontSize: '5',
              }),
            }
          }
        };

        floorplan.drawOutline();
        floorplan.drawRooms();

        paper.view.draw();
    }

    render() {
        return <canvas id="floorplanCanvas" data-paper-resize></canvas>;
    }
}
