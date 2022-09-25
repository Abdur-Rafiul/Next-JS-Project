import React, { Fragment, Component } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import Lottie from "lottie-react";
import contact from "/Animation/contact-us.json";
class Contact extends Component {
  style = {
    width: "400",
  };

  render() {
    return (
      <Fragment>
        <Container fluid={true} className="mt-0 About">
          <Container>
            <Row>
              <Col className="text-center mt-5" lg={6} md={12} sm={12}>
                <Lottie
                  animationData={contact}
                  style={this.style}
                  loop={true}
                />
              </Col>
              <Col  lg={6} md={12} sm={12}>
                <h1 className="ServiceName">Quick Connect</h1>

                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Message</Form.Label>
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Comments"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "200px" }}
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
