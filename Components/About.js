import React, {Fragment,Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="About">
                    <Container>
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            <h1 className="AboutName mt-5">Who i am</h1>
                            <hr/>
                            <p className="AboutDescription">I am a a Responsive Web designer and Web Developer. I makes video tutorial to share my Knowledge. My Over all skill makes me a Complete Software Developer, So You Can hire me for Your Projects</p>

                            <h1 className="AboutName">My Mission</h1>
                            <hr/>
                            <p className="AboutDescription">My mission is to develop unique idea and quality software that will secure top ranking in marketeplace,people's system and people's heart Develop robust, secure, dynamic responsive software for all platform (computer, tab, mobile phone), provide top notch customer service,customization of our product according to customer demand and current technology, planning advanced techniques for optimization, user experience and satisfaction of custoomer for our software. lanning flexible that will nit be bounded by any linguistic or regional. I want to flourish software that can blow people's heart and soul</p>

                        </Col>
                    </Row>
                </Container>
                </Container>
            </Fragment>
        );
    }
}

export default About;