import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { ClimateData } from '../api/climateData.js';
import { AreaData } from '../api/areaData.js';

class DataInput extends Component {
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
  }

  render() {
    return (
      <div className='form'>
        { this.props.currentUser ?
                    <form className='dataInput' onSubmit={this.handleSubmit.bind(this)} >
                      <select ref='areaInput'>
                        <option disabled selected value> -- select an option -- </option>
                        <option value='incubation'>Incubation Area</option>
                        <option value='growout1'>Growout Area 1</option>
                        <option value='growout2'>Growout Area 2</option>
                        <option value='breeding'>Breeding Area</option>
                      </select>
                      <input type='number' ref='waterInput' placeholder='water used (gal)'/>
                      <input type='number' ref='energyInput' placeholder='energy used (kWh)'/>
                      <input type='number' ref='feedInput' placeholder='feed used (lbs)'/>
                      <input type='number' ref='insectInput' placeholder='insects (lbs)'/>
                      <input type='number' ref='frassInput' placeholder='frass (lbs)'/>
                      <input type='number' ref='eggsInput' placeholder='eggs (lbs)'/>
                      <input type='number' ref='deadInput' placeholder='dead insects (lbs)'/>
                      <input type='number' ref='harvestedInput' placeholder='insects harvested (lbs)'/>
                      <input type='number' ref='moveOnInput' placeholder='insects progressing (lbs)'/>
                      <input type='submit'></input>
                    </form> : ''
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
