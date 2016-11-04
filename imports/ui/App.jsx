import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { ClimateData } from '../api/climateData.js';
import { AreaData, AggregateData } from '../api/areaData.js';
import Climate from './Climate.jsx';
import ChartExample from './ChartExample.jsx';
import PaperExample from './PaperExample.jsx';
import Floorplan from './Floorplan.jsx';
import ClimateChart from './ClimateChart.jsx';
import InsectChart from './InsectChart.jsx';
import InputChart from './InputChart.jsx';
import DataInput from './DataInput.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Grid, Row, Col, Button } from 'react-bootstrap';

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

  renderInsectAggregateChart() {
    var data = AggregateData.find({}, {sort: { createdAt: -1 } }).fetch();

    return (
      <InsectChart data={data} title={'Total Yields'}/>
    );
  }

  renderInputAggregateChart() {
    var data = AggregateData.find({}, {sort: { createdAt: -1 } }).fetch();

    return (
      <InputChart data={data} title={'Total Inputs'}/>
    );
  }

  renderCharts() {
    return (
      <div>
        <Row className='show-grid'>
          <Col md={6}>
            {this.renderInsectAggregateChart()}
          </Col>
          <Col md={6}>
            {this.renderInputAggregateChart()}
          </Col>
        </Row>
        {Object.keys(this.props.areaNames).map((area) => {
          return (
            <div>
              <Row className='show-grid'>
                <Col md={4}>{this.renderInsectChart(area)}</Col>
                <Col md={4}>{this.renderClimateChart(area)}</Col>
                <Col md={4}>{this.renderInputChart(area)}</Col>
              </Row>
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

        <Grid>
          <Row className='show-grid'>
            <Col md={6} mdPush={3}>
              <Floorplan />
            </Col>
          </Row>

          <Row className='show-grid'>
            <Col md={6} mdPush={3}>
              <h2>Data Input</h2>
              <DataInput />
            </Col>
          </Row>

          <div>
            {this.renderCharts()}
          </div>
        </Grid>

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
  Meteor.subscribe('aggregateData');

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
