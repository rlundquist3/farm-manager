import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { ClimateData } from '../api/climateData.js';
import { AreaData } from '../api/areaData.js';
import Climate from './Climate.jsx';
import Floorplan from './Floorplan.jsx';
import ChartExample from './ChartExample.jsx';
import PaperExample from './PaperExample.jsx';
import ClimateChart from './ClimateChart.jsx';
import InsectChart from './InsectChart.jsx';
import InputChart from './InputChart.jsx';
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
      <ClimateChart climateData={data} title={this.props.areaNames[area] + ' Climate'}/>
    );
  }

  renderInsectChart(area) {
    var data = AreaData.find({area: area}, {sort: { createdAt: -1 } }).fetch();

    return (
      <InsectChart data={data} title={this.props.areaNames[area] + ' Yields'}/>
    );
  }

  renderInputChart(area) {
    var data = AreaData.find({area: area}, {sort: { createdAt: -1 } }).fetch();

    return (
      <InputChart data={data} title={this.props.areaNames[area] + ' Inputs'}/>
    );
  }

  renderCharts() {
    return (
      <div>
        {Object.keys(this.props.areaNames).map((area) => {
          return (
            <div>
              {this.renderInsectChart(area)}
              {this.renderClimateChart(area)}
              {this.renderInputChart(area)}
            </div>
          );
        })}
      </div>
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

        <div>
          {this.renderCharts()}
        </div>

      </div>
    );
  }
}

App.propTypes = {
  climateData: PropTypes.array.isRequired,
  areaNames: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  Meteor.subscribe('climateData');
  Meteor.subscribe('areaData');

  return {
    climateData: ClimateData.find({}, {sort: { createdAt: -1 } }).fetch(),
    areaNames: {
      incubation: 'Incubation Area',
      growout1: 'Growout Area 1',
      growout2: 'Growout Area 2',
      breeding: 'Breeding Area',
    },
    currentUser: Meteor.user(),
  };
}, App);
