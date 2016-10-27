import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { ClimateData } from '../api/climateData.js';
import Climate from './Climate.jsx';
import Floorplan from './Floorplan.jsx';
import ChartExample from './ChartExample.jsx';
import PaperExample from './PaperExample.jsx';
import ClimateChart from './ClimateChart.jsx';
import DataInput from './DataInput.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class App extends Component {

  renderClimate() {
    return this.props.climateData.map((climate) => (
      <Climate key={climate._id} climate={climate} />
    ));
  }

  renderClimateChart(area) {
    var data = ClimateData.find({area: area}, {sort: { createdAt: -1 } }).fetch();
    return (
      <ClimateChart climateData={data} />
    );
  }

  render() {
    return (
      <div className="container">
        <header>
          <AccountsUIWrapper />
        </header>

        <h2>Data Input</h2>
        <DataInput />

        <h2>Climate</h2>
        {this.renderClimateChart('incubation')}
        {this.renderClimateChart('growout1')}
        {this.renderClimateChart('growout2')}
        {this.renderClimateChart('breeding')}
      </div>
    );
  }
}

App.propTypes = {
  climateData: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  Meteor.subscribe('climateData');
  return {
    climateData: ClimateData.find({}, {sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
}, App);
