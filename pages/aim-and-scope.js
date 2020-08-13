import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Teachers from "../components/Teachers";
import Topbar from "../components/Topbar";

const TeachersPage = () => {
    return (
        <Layout pageTitle="Aim and Scope | IJEPEM">
            <Topbar/>
            <NavOne />
            <PageHeader title="Aim and Scope" />
            <Teachers />
            <Footer />
        </Layout>
    );
};

export default TeachersPage;
