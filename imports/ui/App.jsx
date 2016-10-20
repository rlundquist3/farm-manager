import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Data } from '../api/data.js'
import Data from './Data.jsx';

class App extends Component {
  getData() {
    return [
      { _id: 1, temp: '80', humidity: '.70' },
      { _id: 2, temp: '81', humidity: '.72' },
      { _id: 3, temp: '80', humidity: '.71' },
    ];
  }

  renderData() {
    return this.props.data.map((data) => (
      <Data key={data._id} data={data} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Data</h1>
        </header>

        <ul>
          {this.renderData()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    data: Data.find({}).fetch(),
  };
}, App);
