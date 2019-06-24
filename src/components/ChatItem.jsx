import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

export default class ChatItem extends Component {
  render() {
    return (
        <ListGroup.Item as="li" active style={{marginTop: 10}}>
          <Image src="https://picsum.photos/50" roundedCircle />
          <p>Username</p>
          <p>{Date.now()}</p>
        </ListGroup.Item>
    )
  }
}
