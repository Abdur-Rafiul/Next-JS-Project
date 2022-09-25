import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Lottie from "lottie-react";
import Reading from "/Animation/reading.json";

class MyStudy extends Component {

     style = {
        height: 500,
      };

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
            <Container fluid={true} className="educationBackground p-sm-4">
                <Container>
               
                <Row>
                    <h2 className="studyMainTitle text-center">Education</h2>
                    
                    <Col lg={12} md={12} sm={12} xs={12}>
                    <Row className='d-flex justify-content-center'>
                    <Col lg={8} md={8} sm={12} xs={12}>
                    <Lottie animationData={Reading} style={this.style} loop={true} />
                    </Col>
                    </Row>
                  
                    </Col>
                    <Row className="mt-5">
                    <Col lg={4} md={6} sm={12} >

                        <Card className="studyCard"
                              data-aos-offset="200">
                            <h3 className="title text-center">Madrasha</h3>
                            <Card.Img className='study-img' variant="top" src="/Photo/madrash.jpg" />
                            <Card.Body>
                                <Card.Title><span className="studyTitle">Miapur Dakhil Madrasha</span></Card.Title>
                                <Card.Text>
                                    <span className="studyDescription text-justify">
                                    I feel blessed to have studied at Miyapur Dakhil Madrasa. When I think of Madrasa, I remember that childhood.
                                    </span>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <Card className="studyCard">
                            <h3 className="title text-center">HSC</h3>
                            <Card.Img className='study-img' variant="top" src="/Photo/college.jpg" />
                            <Card.Body>
                                <Card.Title><span className="studyTitle">Miapur Haji Jasimuddin High School & College</span></Card.Title>
                                <Card.Text>
                                    <span className="studyDescription text-justify">
                                    I feel blessed to have studied at Miapur Haji Jasimuddin High School & College. When I think of Madrasa, I remember that childhood.
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <Card className="studyCard">
                            <h3 className="title text-center">University</h3>
                            <Card.Img className='study-img' variant="top" src="/Photo/daffodil.jpg" />
                            <Card.Body>
                                <Card.Title><span className="studyTitle">Daffodil International University</span></Card.Title>
                                <Card.Text>
                                    <span className="studyDescription text-justify">
                                   I completed my graduation from Computer Department in Daffodil International University. Having a lot of fun at Daffodil University
                                    </span>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </Row>
                </Container>

            </Container>
        );
    }
}

export default MyStudy;