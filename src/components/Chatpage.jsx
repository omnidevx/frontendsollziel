
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import Chatlist from './Chatlist';
import Navigation from './Navigation';
export default class Chatpage extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [
        "hi",
        "loco",
        "hi",
        "pendejo"
      ],
    }
  }
  render() {
    const {messages} = this.state;
    return (
      <div>
        <Navigation />
        <Container>
          <Row>
            <Col md={3}>
              <Chatlist />
            </Col>
            <Col md={9}>
            <ListGroup variant="flush">
              {messages.map( message => <ListGroupItem>{message}</ListGroupItem>)}
            </ListGroup>
            <Form style={{marginTop: 10}} onSubmit={ e => console.log(e)}>
              <Form.Group controlId="formText">
                <Form.Control type="text" placeholder="Enter Text" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
