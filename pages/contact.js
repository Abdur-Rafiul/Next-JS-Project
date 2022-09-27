import React, {Component, Fragment} from 'react';
import NavbarMenu from "../Components/Menu";
import TopPage from "../Components/TopPage";
import Project1 from "../Components/Project";
import Footer from "../Components/Footer";
import Contact1 from "../Components/Contact";
import MessengerCustomerChat from 'react-messenger-customer-chat';
class Contact extends Component {
    render() {
        return (
            <Fragment>
                <NavbarMenu />
                <TopPage PageTitle="Contact Me"/>
                <Contact1 />
                <MessengerCustomerChat
                pageId="108890218036899"
                appId="796358611613793"
               
            />,
                <Footer />
            </Fragment>
        );
    }
}

export default Contact;