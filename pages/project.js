import React, {Component, Fragment} from 'react';
import Project1 from "../Components/Project";
import NavbarMenu from "../Components/Menu";
import TopPage from "../Components/TopPage";
import About1 from "../Components/About";
import Footer from "../Components/Footer";
class Project extends Component {
    render() {
        return (
            <Fragment>
                <NavbarMenu />
                <TopPage PageTitle="Projects"/>
                <Project1 />
                <Footer />

            </Fragment>
        );
    }
}

export default Project;