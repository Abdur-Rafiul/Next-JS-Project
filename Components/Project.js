import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Project extends Component {

    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
            // initialise with other settings
            duration : 2000,
            offset : 100
        });
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center About">
                    <Container>

                        <Row>

                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center" data-aos="fade-down-right">
                                    <img className="ProjectImg" src="/Photo/diu.png"/>
                                    <h2 className="ServiceName">Online Hall Management System For Diu Students</h2>
                                    <p className="ServiceDescription">
                                      I am Building this Website with Laravel Framework and PHP MYSQL also Material Design Bootstrap 5
                                    </p>
                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center" data-aos="fade-down">
                                    <img className="ProjectImg" src="/Photo/per.png"/>
                                    <h2 className="ServiceName">Responsive Portfolio Website</h2>
                                    <p className="ServiceDescription">
                                        I am Building this Website with Next Js and React Bootstrap

                                    </p>
                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard text-center" data-aos="fade-down-left">
                                    <img className="ProjectImg" src="/Photo/re2.png"/>
                                    <h2 className="ServiceName">Responsive Learning Website</h2>
                                    <p className="ServiceDescription">
                                        I am Building this Website with React Js and React Bootstrap
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

export default Project;