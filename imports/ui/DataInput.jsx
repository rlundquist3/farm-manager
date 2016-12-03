import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { ClimateData } from '../api/climateData.js';
import { AreaData } from '../api/areaData.js';
import { Button, Modal, Form, FormGroup, FieldGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';

class DataInput extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      area: ReactDOM.findDOMNode(this.refs.areaInput).value,
      water: ReactDOM.findDOMNode(this.refs.waterInput).value.trim(),
      energy: ReactDOM.findDOMNode(this.refs.energyInput).value.trim(),
      feed: ReactDOM.findDOMNode(this.refs.feedInput).value.trim(),
      insects: ReactDOM.findDOMNode(this.refs.insectInput).value.trim(),
      harvested: ReactDOM.findDOMNode(this.refs.harvestedInput).value.trim(),
      moveOn: ReactDOM.findDOMNode(this.refs.moveOnInput).value.trim(),
      frass: ReactDOM.findDOMNode(this.refs.frassInput).value.trim(),
      eggs: ReactDOM.findDOMNode(this.refs.eggsInput).value.trim(),
      dead: ReactDOM.findDOMNode(this.refs.deadInput).value.trim(),
    }

    Meteor.call('areaData.insert', data);

    // ReactDOM.findDOMNode(this.refs.areaInput).value = '';
    ReactDOM.findDOMNode(this.refs.waterInput).value = '';
    ReactDOM.findDOMNode(this.refs.energyInput).value = '';
    ReactDOM.findDOMNode(this.refs.feedInput).value = '';
    ReactDOM.findDOMNode(this.refs.insectInput).value = '';
    ReactDOM.findDOMNode(this.refs.harvestedInput).value = '';
    ReactDOM.findDOMNode(this.refs.moveOnInput).value = '';
    ReactDOM.findDOMNode(this.refs.frassInput).value = '';
    ReactDOM.findDOMNode(this.refs.eggsInput).value = '';
    ReactDOM.findDOMNode(this.refs.deadInput).value = '';

    this.hideModal();
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className='form'>
        { this.props.currentUser ?
          <div>
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={this.showModal}
            >
              Data Input
            </Button>


            <Modal show={this.state.showModal} onHide={this.hideModal}>
              <Modal.Header closeButton>
                <Modal.Title>Data Input</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form horizontal>
                  <FormGroup controlId='areaInput'>
                    <Col componentClass={ControlLabel} sm={2}>
                      Area
                    </Col>
                    <Col sm={10}>
                      <FormControl ref='areaInput' componentClass='select' placeholder='area'>
                        <option value='incubation'>Incubation Area</option>
                        <option value='growout1'>Growout Area 1</option>
                        <option value='growout2'>Growout Area 2</option>
                        <option value='breeding'>Breeding Area</option>
                      </FormControl>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='waterInput'>
                    <Col componentClass={ControlLabel} sm={2}>
                      Water (gal)
                    </Col>
                    <Col sm={3}>
                      <FormControl ref='waterInput' type='number' placeholder='water' />
                    </Col>
                    <Col componentClass={ControlLabel} sm={2}>
                      Energy (kWh)
                    </Col>
                    <Col sm={3}>
                      <FormControl ref='energyInput' type='number' placeholder='energy' />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='feedInput'>
                    <Col componentClass={ControlLabel} sm={2}>
                      Feed (lbs)
                    </Col>
                    <Col sm={3}>
                      <FormControl ref='feedInput' type='number' placeholder='feed' />
                    </Col>
                    <Col componentClass={ControlLabel} sm={2}>
                      Insects (lbs)
                    </Col>
                    <Col sm={3}>
                      <FormControl ref='insectInput' type='number' placeholder='insects' />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='harvestedInput'>
                    <Col componentClass={ControlLabel} sm={2}>
                      Harvested (lbs)
                    </Col>
                    <Col sm={3}>
                      <FormControl ref='harvestedInput' type='number' placeholder='harvested' />
                    </Col>
                    <Col componentClass={ControlLabel} sm={2}>
                      Insects Moving On (lbs)
                    </Col>
                    <Col sm={3}>
                      <FormControl ref='moveOnInput' type='number' placeholder='moving on' />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='frassInput'>
                    <Col componentClass={ControlLabel} sm={2}>
                      Frass (lbs)
                    </Col>
                    <Col sm={3}>
                      <FormControl ref='frassInput' type='number' placeholder='frass' />
                    </Col>
                    <Col componentClass={ControlLabel} sm={2}>
                      Eggs (lbs)
                    </Col>
                    <Col sm={3}>
                      <FormControl ref='eggsInput' type='number' placeholder='eggs' />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='deadInput'>
                    <Col componentClass={ControlLabel} sm={2}>
                      Dead Insects (lbs)
                    </Col>
                    <Col sm={3}>
                      <FormControl ref='deadInput' type='number' placeholder='dead' />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='submit'>
                    <Col sm={2} smPush={10}>
                      <Button onClick={this.handleSubmit} bsStyle='success'>
                        Submit
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.hideModal}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div> : ''
        }
      </div>
    );
  }
}

DataInput.propTypes = {
  currentUser: PropTypes.object,
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  }
}, DataInput);
