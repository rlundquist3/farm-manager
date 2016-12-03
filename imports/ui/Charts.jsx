import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { ClimateData } from '../api/climateData.js';
import { AreaData, AggregateData } from '../api/areaData.js';
import ClimateChart from './ClimateChart.jsx';
import YieldChart from './YieldChart.jsx';
import InputChart from './InputChart.jsx';
import DataInput from './DataInput.jsx';
import { Grid, Row, Col, Button, Carousel, Tabs, Tab } from 'react-bootstrap';

class Charts extends Component {
  renderClimateChart(area) {
    var data = ClimateData.find({area: area}, {sort: { createdAt: -1 } }).fetch();

    return (
      <ClimateChart climateData={data} title={this.props.areaNames[area] + ' Climate'} />
    );
  }

  renderYieldChart(area) {
    var data = AreaData.find({area: area}, {sort: { createdAt: -1 }, limit: this.props.timeShown }).fetch();

    return (
      <YieldChart data={data} title={this.props.areaNames[area] + ' Yields'} />
    );
  }

  renderInputChart(area) {
    var data = AreaData.find({area: area}, {sort: { createdAt: -1 }, limit: this.props.timeShown }).fetch();

    return (
      <InputChart data={data} title={this.props.areaNames[area] + ' Inputs'} />
    );
  }

  renderInsectAggregateChart() {
    var data = AggregateData.find({}, {sort: { createdAt: -1 }, limit: this.props.timeShown }).fetch();

    return (
      <YieldChart data={data} title={'Total Yields'} />
    );
  }

  renderInputAggregateChart() {
    var data = AggregateData.find({}, {sort: { createdAt: -1 }, limit: this.props.timeShown }).fetch();

    return (
      <InputChart data={data} title={'Total Inputs'} />
    );
  }

  handleSelect(key) {
    this.setState({key});
  }

  render() {
    return (
      <div>
        <Row className='show-grid'>
          <Col md={8} mdPush={2}>
            <h3>Aggregate Data</h3>
            <Tabs>
              <Tab eventKey='total yields' title='Yields'>{this.renderInsectAggregateChart()}</Tab>
              <Tab eventKey='total inputs' title='Inputs'>{this.renderInputAggregateChart()}</Tab>
            </Tabs>
          </Col>
        </Row>
        <Row className='show-grid'>
          {Object.keys(this.props.areaNames).map((area) => {
            return (
              <Col md={5} mdPush={1}>
                <Row>
                  <Col md={5}>
                    <h3>{this.props.areaNames[area]}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} mdPush={9}>
                    <DataInput pullRight='true' area={area} />
                  </Col>
                </Row>
                <Tabs>
                  <Tab eventKey={area + 'yields'} title='Yields'>{this.renderYieldChart(area)}</Tab>
                  <Tab eventKey={area + 'inputs'} title='Inputs'>{this.renderInputChart(area)}</Tab>
                  <Tab eventKey={area + 'climate'} title='Climate'>{this.renderClimateChart(area)}</Tab>
                </Tabs>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

Charts.propTypes = {
  climateData: PropTypes.array.isRequired,
  areaNames: PropTypes.object.isRequired,
  timeShown: PropTypes.number,
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
    timeShown: 7,
    currentUser: Meteor.user(),
  };
}, Charts);
