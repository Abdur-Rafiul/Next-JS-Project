import React, {Fragment,Component} from 'react';
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";

class Contact extends Component {
    render() {
        return (

                <Fragment>
                    <Container fluid={true} className="mt-0 About">
                        <Container>
                        <Row>
                            <Col lg={6} md={12} sm={12}>

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
                                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ height: '100px' }}
                                            />
                                        </FloatingLabel>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>


                            </Col>
                            <Col className="text-center mt-5" lg={6} md={12} sm={12}>
                                <h1 className="ServiceName">Discuss Now</h1>
                                <p className="ServiceDescription">6670, Miapur Hajipara Bongram Bazar Pabna</p>
                                <p><i className="fa-regular fa-envelope p-1"></i>Engr.rafiul15-2265@diu.edu.bd.com</p>
                                <p><i className="fa-solid  fa-phone text-success p-1"></i> +880170-1729512</p>
                            </Col>
                        </Row>
                    </Container>
                    </Container>

            </Fragment>
        );
    }
}

export default Contact;