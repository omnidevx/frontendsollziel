import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

// import { getConversation } from "../api/conversations";
import { getMessages } from "../api/chat";

export default class ChatItem extends Component {

  constructor(props) {
    super();
    this.state = { }
    console.log(props);
  }

  async loadData() {
    const { client, userId } = this.props;
    console.log(await getMessages(userId, client.id));
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { client } = this.props;

    return (
      <ListGroup.Item as="li" active style={{marginTop: 10}}>
        <Image src="https://picsum.photos/50" roundedCircle />
        <p>{client.username ? client.username : "Unbekannt"}</p>
        <p onClick={() => this.props.onClick(6, client.id) }>{client.id}</p>
      </ListGroup.Item>
    )
  }
}
