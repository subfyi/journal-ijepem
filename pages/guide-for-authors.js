import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

const TeachersPage = () => {
    return (
        <Layout pageTitle="Guide for Authors | IJEPEM">
            <Topbar/>
            <NavOne/>
            <PageHeader title="Guide for Authors"/>
            <section className="team-details">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-12">
                            <div className="team-details__content">
                                <p>
                                    All manuscripts should be written accourding to template document given below.



                                </p>
                                <p><a href="https://ijepem.com/IJEPEM-Template-for-Autors.docx">  Template for Autors ( https://ijepem.com/IJEPEM-Template-for-Autors.docx )

                                </a>
                                </p>

                                <p>
                                    Copyright Form File Must Be Signed By All Authors And Uploaded To The System.

                                </p>
                                <p><a href="https://ijepem.com/doc/ijepem-telif-hakki-formu.pdf"> Copyright Form File ( https://ijepem.com/doc/ijepem-telif-hakki-formu.pdf )</a></p>


                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </Layout>
    );
};

export default TeachersPage;
