import React, {Fragment, Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class TopPage extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="topFixedPage1 p-0">
                    <div className="topPageOverly">
                        <Container className="topPageContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topPageTitle">{this.props.PageTitle}</h1>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>


            </Fragment>
        );
    }
}

export default TopPage;