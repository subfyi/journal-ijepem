import React from "react";
import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import AboutOne from "../components/AboutOne";


const HomePage = () => (

    <Layout pageTitle="International Journal of Environmental Pollution and Environmental Modelling | IJEPEM">
        <Topbar/>
        <NavOne/>
        <AboutOne/>
        <AboutTwo/>
        <Footer/>
    </Layout>

)

export default HomePage;