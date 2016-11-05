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
import { Grid, Row, Col, Button } from 'react-bootstrap';

class App extends Component {

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
              <DataInput />
            </Col>
          </Row>

          <Charts />
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
