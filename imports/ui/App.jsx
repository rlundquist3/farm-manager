import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { ClimateData } from '../api/climateData.js';
import { AreaData, AggregateData } from '../api/areaData.js';
import Floorplan from './Floorplan.jsx';
import ClimateChart from './ClimateChart.jsx';
import YieldChart from './YieldChart.jsx';
import InputChart from './InputChart.jsx';
import DataInput from './DataInput.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Header from './Header.jsx';
import Charts from './Charts.jsx';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';

class App extends Component {

  changeTimeShown(days) {
    this.setState({timeShown: days});
  }

  render() {
    return (
      <div className="container">
        <Header />

        <Grid>
          <Row className='show-grid'>
            <Col md={6} mdPush={3}>
              <Floorplan />
            </Col>
          </Row>

          <Row className='show-grid'>
            <Col md={6} mdPush={3}>

            </Col>
          </Row>

          <Row className='show-grid'>
            <Col md={6} mdPush={3}>
              <ButtonToolbar>
                <Button onClick={this.changeTimeShown(7)} active={this.props.timeShown === 7}>Week</Button>
                <Button onClick={this.changeTimeShown(14)} active={this.props.timeShown === 14}>2 Weeks</Button>
                <Button onClick={this.changeTimeShown(30)} active={this.props.timeShown === 30}>Month</Button>
                <Button onClick={this.changeTimeShown(90)} active={this.props.timeShown === 90}>3 Months</Button>
                <Button onClick={this.changeTimeShown(180)} active={this.props.timeShown === 180}>6 Months</Button>
                <Button onClick={this.changeTimeShown(365)} active={this.props.timeShown === 365}>Year</Button>
              </ButtonToolbar>
            </Col>
          </Row>

          <Row className='show-grid'>
            <Col md={6} mdPush={3}>

            </Col>
          </Row>

          <Charts timeShown={this.props.timeShown} />
        </Grid>

      </div>
    );
  }
}

App.propTypes = {
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
}, App);
