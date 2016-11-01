import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

export default class Floorplan extends Component {

    componentDidMount() {
        var floorplanCanvas = document.getElementById('floorplanCanvas');
        paper.setup(floorplanCanvas);

        const BUILDING_SCALING_FACTOR = 100;

        var width = paper.view.size.width;
        var height = paper.view.size.height;

        paper.view.draw();

        var floorplan = {
          drawing: null,
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
            var outline = new paper.Path.Rectangle({
              topLeft: [this.position.x, this.position.y],
              bottomRight: [this.position.x+this.size.width, this.position.y+this.size.length],
              strokeColor: 'black',
            });

            this.drawing = new paper.Group([outline]);
          },

          drawRooms: function() {
            var rooms = {
              incubation: this.drawing.addChild(new paper.Group()),
              growout1: this.drawing.addChild(new paper.Group()),
              growout2: this.drawing.addChild(new paper.Group()),
              breeding: this.drawing.addChild(new paper.Group()),
            };

            var outlines = {
              incubation: rooms.incubation.addChild(new paper.Path.Rectangle({
                topLeft: [this.position.x+this.size.walls, this.position.y+3*this.size.walls+0.55*this.size.length],
                bottomRight: [this.position.x+this.size.walls+0.45*this.size.width, this.position.y+3*this.size.walls+0.65*this.size.length],
                strokeColor: 'black',
              })),
              growout1: rooms.growout1.addChild(new paper.Path.Rectangle({
                topLeft: [this.position.x+this.size.walls, this.position.y+this.size.walls+0.4*this.size.length],
                bottomRight: [this.position.x+this.size.walls+0.45*this.size.width, this.position.y+2*this.size.walls+0.55*this.size.length],
                strokeColor: 'black',
              })),
              growout2: rooms.growout2.addChild(new paper.Path.Rectangle({
                topLeft: [this.position.x+this.size.walls, this.position.y+this.size.walls],
                bottomRight: [this.position.x+this.size.width-this.size.walls, this.position.y+0.4*this.size.length],
                strokeColor: 'black',
              })),
              breeding: rooms.breeding.addChild(new paper.Path.Rectangle({
                topLeft: [this.position.x+0.55*this.size.width, this.position.y+this.size.walls+0.4*this.size.length],
                bottomRight: [this.position.x+this.size.width-this.size.walls, this.position.y+2*this.size.walls+0.6*this.size.length],
                strokeColor: 'black',
              })),
            }

            var text = {
              incubation: rooms.incubation.addChild(new paper.PointText({
                point: rooms.incubation.bounds.leftCenter,
                content: 'Incubation Area',
                fillColor: 'black',
                fontSize: '5',
              })),
              growout1: rooms.growout1.addChild(new paper.PointText({
                point: rooms.growout1.bounds.leftCenter,
                content: 'Growout Area 1',
                fillColor: 'black',
                fontSize: '5',
              })),
              growout2: rooms.growout2.addChild(new paper.PointText({
                point: rooms.growout2.bounds.leftCenter,
                content: 'Growout Area 2',
                fillColor: 'black',
                fontSize: '5',
              })),
              breeding: rooms.breeding.addChild(new paper.PointText({
                point: rooms.breeding.bounds.leftCenter,
                content: 'Breeding Area',
                fillColor: 'black',
                fontSize: '5',
              })),
            };

            // rooms.incubation.onClick = function(event) {
            //   this.fillColor = 'red';
            // }
          }
        };

        floorplan.drawOutline();
        floorplan.drawRooms();

        // floorplan.drawing.position = paper.view.center;

        var tool = new paper.Tool();
        // var path;
        //
    		// // Define a mousedown and mousedrag handler
        // // Draws pretty lines (test mouse tracking)
    		// tool.onMouseDown = function(event) {
    		// 	path = new paper.Path();
    		// 	path.strokeColor = 'black';
    		// 	path.add(event.point);
    		// }
        //
    		// tool.onMouseDrag = function(event) {
    		// 	path.add(event.point);
    		// }

        tool.onMouseUp = function(event) {
          console.log(event.point);
          floorplan.drawing.rotate(3);

          if(event.point.isInside(floorplan.drawing.bounds)) {
            console.log('fuckballs');
          }
        }
    }

    render() {
        return <canvas id="floorplanCanvas" width="500" height="500"></canvas>;
    }
}
