import React, { Component } from 'react';

import Data from './Data.jsx';

export default class App extends Component {
  getData() {
    return [
      { _id: 1, temp: '80', humidity: '.70' },
      { _id: 2, temp: '81', humidity: '.72' },
      { _id: 3, temp: '80', humidity: '.71' },
    ];
  }

  renderData() {
    return this.getData().map((data) => (
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
