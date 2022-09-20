import React, {Component, Fragment} from 'react';
import ScrollToTop from "react-scroll-to-top";
import {FaArrowUp} from "react-icons/fa";

class ScrollTopBtn extends Component {


    render() {
        return (
            <Fragment>

                <ScrollToTop className="bg-light" smooth top="400" color="#C23272" />
            </Fragment>
        );
    };
}

export default ScrollTopBtn;