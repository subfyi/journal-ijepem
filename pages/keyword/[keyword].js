import React from 'react';
import Link from 'next/link';
import http from '../../api'
import SimpleReactValidator from "simple-react-validator";
import api from "../../api";
import Layout from "../../components/Layout";
import Topbar from "../../components/Topbar";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";

export default class extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({query}) {
        var articles = await api("/api/articles?page=1&itemPerPage=-1&sort=order_num&desc=false&journal=IJEPEM&keyword=" + query.keyword);
        return {
            articles: articles,
            keyword: query.keyword,
        };
    }

    render() {
        const {articles, keyword} = this.props;

        return (
            <Layout pageTitle={"Keyword " + keyword + " | UCBAD "}>
                <Topbar/>
                <NavOne/>
                <PageHeader title={"Keyword " + keyword}/>
                <Faq
                    articles={articles}
                    keyword={keyword}
                />
                <Footer/>
            </Layout>);
    }
}