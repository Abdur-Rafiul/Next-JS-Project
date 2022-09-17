import React, {Component, Fragment} from 'react';
import NavbarMenu from "../Components/Menu";
import TopPage from "../Components/TopPage";
import Project1 from "../Components/Project";
import Footer from "../Components/Footer";
import Contact1 from "../Components/Contact";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <NavbarMenu />
                <TopPage PageTitle="Contact Me"/>
                <Contact1 />
                <Footer />
            </Fragment>
        );
    }
}

export default Contact;