import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ChatItem from './ChatItem';

import { getClient } from "../api/client";

export default class Chatlist extends Component {

  constructor() {
    super();
    this.state = {
      client: null,
      userId: 6
    }
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { userId } = this.state;
    let client = await getClient(userId);
    this.setState({ client });
  }

  render() {
    const { client, userId } = this.state;

    return client ? (
      <ListGroup as="ul" style={{ paddingTop: 10 }}>
        {client.conversations.map(i => (
          <ChatItem userId={userId} client={i} onClick={this.props.onClick}/>
        ))}
      </ListGroup>
    ) : null;

  }
}
