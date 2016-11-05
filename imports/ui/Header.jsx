import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar staticTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">The Hive | Colony Farm</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Text>
          <AccountsUIWrapper />
        </Navbar.Text>
      </Navbar>
    )
  }
}

Header.propTypes = {
  currentUser: PropTypes.object,
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  }
}, Header);
