import React, { Component } from "react";
import { Button, Col, Modal, ProgressBar, Row } from "react-bootstrap";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import Typewriter from "typewriter-effect";
class SingleSlider extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      title1: "I'm Rafiul Islam",
      title2: "Web Developer",
    };
  }
  modalClose = () => {
    this.setState({ show: false });
  };
  modalOpen = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="singleSlider">
        <div className="container">
          <Row>
            <Col className="single-container" sm={12} xs={12} md={12} lg={6}>


            <div className="slideText">
                <Typewriter
                  options={{
                    strings: 
                    [
                       this.state.title1,
                       this.state.title2
                      
                    
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }}
                />
              </div>


              <h1 className="diuText text-left">Daffodil International University</h1>
              {/* <h1 className="h1">{this.state.title2}</h1>  */}

            

              <ProgressBar className="mt-3 mb-3 progress-style">
                <ProgressBar
                  label={`${"C"}++`}
                  striped
                  variant="dark"
                  now={15}
                  key={3}
                />
                <ProgressBar
                  label={`${"C++"}++`}
                  variant="dark"
                  now={15}
                  key={3}
                />
                <ProgressBar
                  label={`${"Php"}++`}
                  striped
                  variant="danger"
                  now={10}
                  key={3}
                />
                <ProgressBar
                  label={`${"JavaScript"}++`}
                  striped
                  variant="primary"
                  now={20}
                  key={3}
                />
                <ProgressBar
                  label={`${"Laravel"}`}
                  striped
                  variant="dark"
                  now={15}
                  key={3}
                />
                <ProgressBar
                  label={`${"React Js"}++`}
                  striped
                  variant="danger"
                  now={25}
                  key={3}
                />
              </ProgressBar>
  
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <h1 onClick={this.modalOpen} className="playBtnHeading mt-5">
                    <i className="playBtn fa-solid fa-circle-play"></i>
                  </h1>
                </Col>
              </Row>
            </Col>
            <Col sm={12} xs={12} md={12} lg={6}>
              <img
                className="img-slider shadow-5-strong"
                src="/Photo/robin.png"
                alt="Picture of the author"
              />
            </Col>
          </Row>
        </div>

        <Modal size={"lg"} show={this.state.show} onHide={this.modalClose}>
          <Modal.Title className="text-center modalTitle">
            My Resume Video
          </Modal.Title>

          <Modal.Body>
            <ReactPlayer
              className="react-player"
              width="100%"
              url="https://youtu.be/1RZ7NtjxY4c"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SingleSlider;
