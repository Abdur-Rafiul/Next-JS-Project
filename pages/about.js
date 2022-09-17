import React, {Component, Fragment} from 'react';
import Footer from "../Components/Footer";
import NavbarMenu from "../Components/Menu";
import About1 from "../Components/About";
import TopPage from "../Components/TopPage";


class About extends Component {
    render() {
        return (
            <Fragment>
                <NavbarMenu />
                <TopPage PageTitle="About Me"/>
                <About1/>
                <Footer />
            </Fragment>
        );
    }
}

export default About;