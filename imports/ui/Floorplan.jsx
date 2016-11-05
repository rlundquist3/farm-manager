import React, { Component, PropTypes } from 'react';
import { render, setState } from 'react-dom';
import { Button, Modal } from 'react-bootstrap';

export default class Floorplan extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {

    var floorplanCanvas = document.getElementById('floorplanCanvas');
    floorplanCanvas.width = document.getElementById('canvasDiv').clientWidth;
    floorplanCanvas.height = document.getElementById('canvasDiv').clientHeight;
    paper.setup(floorplanCanvas);

    const BUILDING_SCALING_FACTOR = 100;

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

      if(event.point.isInside(floorplan.drawing.children[1].bounds)) {
        console.log('incubation');
      } else if (event.point.isInside(floorplan.drawing.children[2].bounds)) {
        console.log('growout1');
      } else if (event.point.isInside(floorplan.drawing.children[3].bounds)) {
        console.log('growout2');
      } else if (event.point.isInside(floorplan.drawing.children[4].bounds)) {
        console.log('breeding');
      }
    }
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div id='canvasDiv'>
        <canvas id='floorplanCanvas' height='300'></canvas>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.showModal}
        >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
