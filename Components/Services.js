import React, {Component, Fragment} from 'react';
import FormRange from "react-bootstrap/FormRange";
import {Col, Container, Row} from "react-bootstrap";

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center About">
                    <Container>

                    <Row>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="serviceImg" src="/Photo/mobile.jpg"/>
                                <h2 className="ServiceName">Web Development</h2>
                                <p className="ServiceDescription">
                                    In computer system, a web application is a client-side and server-side software application in which the client runs or request in a web browser. Common web applications include email, online retail sales, online auctions, wikis, instant messaging services and more.
                                </p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="serviceImg" src="/Photo/mo.jpg"/>
                                <h2 className="ServiceName">Mobile Development</h2>
                                <p className="ServiceDescription">
                                    Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.
                                </p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img className="serviceImg" src="/Photo/design.jpg"/>
                                <h2 className="ServiceName">Graphic Design</h2>
                                <p className="ServiceDescription">
                                    Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers. They develop the overall layout and production design for applications
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </Container>
            </Fragment>
        );
    }
}

export default Services;