import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";

class ClientReview extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container fluid={true} className="clientBackground">
                    <Container className="p-5">
                    <h1 className="text-center clientTitle pb-5">Client Review</h1>
                <div>

                    <Slider {...settings}>
                        <div>
                       <Row className="text-center justify-content-center">
                           <Col lg={6} md={6} sm={12}>
                                <img className="circularImg" src="/Photo/robin.png" />
                               <h1>Web Development</h1>
                               <p>Your Project Very Nice. ifrst i analysis the requirement of the Project ifrst i analysis the requirement of the Projectifrst i analysis the requirement of the Project</p>

                           </Col>
                       </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circularImg" src="/Photo/robin.png"/>
                                    <p>Your Project Very Nice. ifrst i analysis the requirement of the Project ifrst i analysis the requirement of the Projectifrst i analysis the requirement of the Project</p>

                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circularImg" src="/Photo/robin.png" />
                                    <h1>Web Development</h1>
                                    <p>Your Project Very Nice. ifrst i analysis the requirement of the Project ifrst i analysis the requirement of the Projectifrst i analysis the requirement of the Project</p>

                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circularImg" src="/Photo/robin.png" />
                                    <h1>Web Development</h1>
                                    <p>Your Project Very Nice. ifrst i analysis the requirement of the Project ifrst i analysis the requirement of the Projectifrst i analysis the requirement of the Project</p>

                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </div>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;