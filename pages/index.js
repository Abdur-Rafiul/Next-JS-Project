import ScrollTopBtn from "../Components/ScrollTopBtn";

export async function getStaticProps() {

    const data = [
        {
            name: 'C',
            can: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'C++',
            can: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'PHP',
            can: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Laravel',
            can: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'React js',
            can: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Next Js',
            can: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'JavaScript',
            can: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'DSA',
            can: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Algorithm',
            can: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return {
        props:{
            d:1,
            dataCharts:data
        },
        revalidate: 1,

    }


}
import React, {Component} from 'react';

import NavbarMenu from "../Components/Menu";
import SingleSlider from "../Components/singleSlider";
import MyStudy from "../Components/myStudy";
import MySkillList from "../Components/mySkillList";
import Summary from "../Components/Summary";
import ClientReview from "../Components/clientReview";
import Footer from "../Components/Footer";
import Project from "../Components/homePageProject";
import {Container} from "react-bootstrap";


class Index extends Component {
  render() {
    return (
        <div>
            <NavbarMenu />
            <SingleSlider />


            <MySkillList
                dataCharts={this.props.dataCharts}
            />
            <MyStudy />
            <Project/>
            <Summary />
            <ClientReview />

            <Footer />

        </div>
    );
  }
}

export default Index;