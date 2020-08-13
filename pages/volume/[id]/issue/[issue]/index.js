import React from 'react';
import Layout from "../../../../../components/Layout";
import NavOne from "../../../../../components/NavOne";
import PageHeader from "../../../../../components/PageHeader";
import Footer from "../../../../../components/Footer";
import Faq from "../../../../../components/Faq";
import SimpleReactValidator from "simple-react-validator";
import api from "../../../../../api";
import Topbar from "../../../../../components/Topbar";

export default class YearList extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({ query }) {
        var articles = await api("/api/submission?page=1&itemPerPage=-1&sort=order_num&desc=false&volume=" + query.id + "&issue=" + query.issue);
        return {
            articles: articles,
            volume: query.id,
            issue: query.issue,
        };
    }

    render() {
        const {articles, volume, issue} = this.props;

        return (
            <Layout pageTitle={"Volume " + volume + " Issue " + issue  + " | IJEPEM "}>
                <Topbar/>
                <NavOne/>
                <PageHeader title={"Volume " + volume + " Issue " + issue }/>
                <Faq
                    articles={articles}
                    volume={volume}
                    issue={issue}
                />
                <Footer/>
            </Layout>);
    }
}
