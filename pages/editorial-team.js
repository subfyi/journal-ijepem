import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import TeachersDetails from "../components/TeachersDetails";
import Topbar from "../components/Topbar";

const TeachersDetailsPage = () => {
    return (
        <Layout pageTitle="Editorial Board | IJEPEM">
            <Topbar/>
            <NavOne />
            <PageHeader title="Editorial Board" />
            <TeachersDetails />
            <Footer />
        </Layout>
    );
};

export default TeachersDetailsPage;
