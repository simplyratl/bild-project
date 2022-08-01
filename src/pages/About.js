import React from "react";
import MainSection from "../components/about/MainSection";
import Services from "../components/about/Services";
import Banner from "../components/Banner";

const About = () => {
    return (
        <>
            <Banner title="ABOUT MY BUSINESS" />
            <MainSection />
            <Services />
        </>
    );
};

export default About;
