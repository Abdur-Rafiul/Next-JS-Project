import React, {Component, Fragment} from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text} from 'recharts';
import {Col, Container, Row} from "react-bootstrap";


class MySkillList extends Component {

    render() {


        return (
            <Fragment>
                 <Container className="text-center ">
                     <h2 className="studyMainTitle">My Skills</h2>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart width={150} height={40} data={this.props.dataCharts}>
                                <XAxis dataKey="name"/>
                                <Tooltip/>
                                <Bar dataKey="can" fill="#C23272" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                         <p className="skillDescription ms-5 mt-5 ms-sm-0 ms-md-0">
                             I can create any website and develop the website according to the client's requirements.
                             I am a laravel developer. I am frontend and I have good skills. I am working on some project Management System, Ecommerce site. I can build websites using React js and NextJs
                         </p>
                    </Col>
                </Row>
                {/*<h1>{this.props.dataCharts[0].name}</h1>*/}

                 </Container>
            </Fragment>
        );
    }
}

export default MySkillList;