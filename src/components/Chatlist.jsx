import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ChatItem from './ChatItem';

export default class Chatlist extends Component {
  render() {
    
    return (
      <ListGroup as="ul" style={{paddingTop: 10}}>
      {arr.map(i => <ChatItem />)}
      </ListGroup>
    )
  }
}
