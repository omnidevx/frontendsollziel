import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends Component {
  render () {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Omnichat</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Jonas Schultheiss</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation