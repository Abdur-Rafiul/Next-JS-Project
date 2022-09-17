import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryFixedBanner">
                    <Container>
                        <Row>
                            <Col lg={8} md={6} sm={12}>
                                <Row className="countSection text-center">
                                    <Col>
                                        <h1 className="countNumber">100</h1>
                                        <h4 className="countTitle">Total Project</h4>
                                        <hr />
                                    </Col>
                                    <Col>
                                        <h1 className="countNumber">

                                            <CountUp start={0} end={100}>
                                                {({ countUpRef, start }) => (
                                                    <div>


                                                        <VisibilitySensor onChange={start}>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    </div>
                                                )}
                                            </CountUp>

                                        </h1>
                                        <h4 className="countTitle">Total Visitor</h4>
                                        <hr />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="work">
                                <span>

                                            <span className="cardTitle mt-2">How i Works</span>
                                               <h5 className="cardSubtitle text-justify me-2 mt-3"><i
                                                   className="text-danger fa-solid fa-check me-2"></i>Requirement Gathering</h5>
                                                <h5 className="cardSubtitle text-justify me-2"><i
                                                    className="text-danger fa-solid fa-check me-2"></i>System Analysis</h5>
                                                <h5 className="cardSubtitle text-justify me-2"><i
                                                    className=" text-danger fa-solid fa-check me-2"></i>Coading Testing</h5>
                                                <h5 className=" cardSubtitle text-justify me-2"><i
                                                    className="text-danger fa-solid fa-check me-2"></i>Implementation</h5>
                                                <h5 className="cardSubtitle text-justify me-2"><i
                                                    className="text-danger fa-solid fa-check me-2"></i>User Experience</h5>

                                </span>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;