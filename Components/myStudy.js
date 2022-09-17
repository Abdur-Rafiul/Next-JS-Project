import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';


class MyStudy extends Component {

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
            <Container fluid={true} className="educationBackground">
                <Container>
                <Row>
                    <h2 className="studyMainTitle text-center">Education</h2>
                    <Col lg={4} md={6} sm={12}>

                        <Card className="studyCard"  data-aos="fade-up"
                              data-aos-offset="200">
                            <h3 className="title text-center">Madrasha</h3>
                            <Card.Img width="100%" variant="top" src="/Photo/madrash.jpg" />
                            <Card.Body>
                                <Card.Title><span className="studyTitle">Miapur Dakhil Madrasha</span></Card.Title>
                                <Card.Text>
                                    <span className="studyDescription text-justify">
                                    I feel blessed to have studied at Miyapur Dakhil Madrasa. When I think of Madrasa, I remember that childhood.
                                    </span>
                                </Card.Text>
                                <div className="m-5"></div>
                                <a href='https://goo.gl/maps/Rdvpq398DrBcqtZr8'><Button className="btn-lg mt-5" variant="danger">Location of Madrasah</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <Card className="studyCard" data-aos="fade-down">
                            <h3 className="title text-center">HSC</h3>
                            <Card.Img width="100%" variant="top" src="/Photo/college.jpg" />
                            <Card.Body>
                                <Card.Title><span className="studyTitle">Miapur Haji Jasimuddin High School & College</span></Card.Title>
                                <Card.Text>
                                    <span className="studyDescription text-justify">
                                    I feel blessed to have studied at Miapur Haji Jasimuddin High School & College. When I think of Madrasa, I remember that childhood.
                                    </span>
                                </Card.Text>
                                <a href='https://goo.gl/maps/ZEXya9G7kv9Qb4oB7'><Button className="btn-lg mt-4" variant="danger">Location of College</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <Card className="studyCard" data-aos="fade-up">
                            <h3 className="title text-center">University</h3>
                            <Card.Img width="100%" variant="top" src="/Photo/daffodil.jpg" />
                            <Card.Body>
                                <Card.Title><span className="studyTitle">Daffodil International University</span></Card.Title>
                                <Card.Text>
                                    <span className="studyDescription text-justify">
                                   I completed my graduation from Computer Department in Daffodil International University. Having a lot of fun at Daffodil University
                                    </span>
                                </Card.Text>
                                <div className="m-5"></div>
                                <a  href='https://goo.gl/maps/f6kX2g147DZwjqMP8'><Button className="btn-lg mt-5" variant="danger">Location of University</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>

            </Container>
        );
    }
}

export default MyStudy;