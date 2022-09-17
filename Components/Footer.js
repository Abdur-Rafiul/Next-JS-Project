import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                 <Container fluid={true} className="text-justify footerSection mt-0">
                     <Row>
                         <Col lg={3} md={6} sm={12} className="p-5">
                             <h1 className="footerHeading">Follow Me</h1>
                            <h5><a className="footerLink" href=""><i className="fa-brands fa-1x p-2 fa-facebook text-primary"></i>Facebook</a></h5>
                             <h5> <a className="footerLink" href=""> <i className="fa-brands fa-1x p-2 fa-youtube text-danger"></i>YouTube</a></h5>
                         </Col>

                         <Col lg={3} md={6} sm={12} className="p-5">
                             <h1 className="footerHeading">Address</h1>
                             <h5 className="footerAddress">6670, Miapur Hajipara Bongram Bazar Pabna</h5>
                             <h5 className="footerAddress"><i className="fa-solid p-2 fa-envelope text-primary"></i>Engr.Rafiul@yahoo.com</h5>
                             <h5 className="footerAddress"><i className="fa-solid fa-1x p-2 fa-phone text-success"></i>+880170-729512</h5>

                         </Col>

                         <Col lg={3} md={6} sm={12} className="p-5">
                             <h1 className="footerHeading">Information</h1>
                             <h5><a className="footerLink" href="">About Me</a></h5>
                             <h5><a className="footerLink" href="">My Resume</a></h5>
                             <h5><a className="footerLink" href="">Contact Me</a></h5>


                         </Col>

                         <Col lg={3} md={6} sm={12} className="p-5">
                             <h1 className="footerHeading">Legal</h1>
                             <h5><a className="footerLink" href="">Refund Policy</a></h5>
                             <h5><a className="footerLink" href="">Terms and Condition</a></h5>
                             <h5><a className="footerLink" href="">Privacy Policy</a></h5>


                         </Col>
                     </Row>
                 </Container>

                <Container fluid={true} className="text-center copyRightSection">
                    <a className="copyRightLink" href="">Rafiul Islam &copy; 2021-2022</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;