import React from 'react';
import Layout from "../../../../../../../components/Layout";
import NavOne from "../../../../../../../components/NavOne";
import PageHeader from "../../../../../../../components/PageHeader";
import CourseDetails from "../../../../../../../components/CourseDetails";
import SimpleReactValidator from "simple-react-validator";
import api from "../../../../../../../api";
import Footer from "../../../../../../../components/Footer";
import Topbar from "../../../../../../../components/Topbar";

export default class Courses extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({ query }) {
        var articles = await api("/api/articles?page=1&itemPerPage=-1&journal=IJEPEM&volume=" + query.id + "&issue=" + query.issue+ "&article=" + query.article);
        return {
            articles: articles.data[0],
            volume: query.id,
            issue: query.issue,
            article: query.article,
        };
    }

    render() {
        const {articles, volume, issue, years, article} = this.props;

        if (!articles) {
            return <div>404</div>
        }

        return (
            <Layout
                pageTitle={"Volume " + volume + " Issue " + issue+ " Article " + article  + " | IJEPEM " }
                articles={articles}
                volume={volume}
                issue={issue}
                article={article}
            >
                <Topbar/>
                <NavOne />
                <PageHeader title={"Volume " + volume + " Issue " + issue+ " Article " + article }/>
                <CourseDetails
                    articles={articles}
                    volume={volume}
                    issue={issue}
                    article={article}
                />
                <Footer/>
            </Layout>);
    }
}
