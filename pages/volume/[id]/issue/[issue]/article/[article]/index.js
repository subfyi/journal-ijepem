import React from 'react';
import Layout from "../../../../../../../components/Layout";
import NavOne from "../../../../../../../components/NavOne";
import PageHeader from "../../../../../../../components/PageHeader";
import CourseDetails from "../../../../../../../components/CourseDetails";
import SimpleReactValidator from "simple-react-validator";
import api from "../../../../../../../api";
import Footer from "../../../../../../../components/Footer";
import Topbar from "../../../../../../../components/Topbar";
import Faq from "../../../../../../../components/Faq";

export default class Courses extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({query}) {
        var articles = await api("/api/articles?page=1&itemPerPage=-1&journal=IJEPEM&volume=" + query.id + "&issue=" + query.issue + "&article=" + query.article);
        var volumes = await api("/api/volumes?page=1&itemPerPage=-1&sort=id&desc=true&journal=IJEPEM&volume=" + query.id + "&issue=" + query.issue);
        return {
            volumes: volumes,
            articles: articles.data[0],
            volume: query.id,
            issue: query.issue,
            article: query.article,
        };
    }

    render() {
        const {articles, volume,
            volumes, issue, years, article} = this.props;

        if (!articles) {
            return <div>404</div>
        }

        return (
            <Layout
                pageTitle={articles.en_title + " | IJEPEM " }
                articles={articles}
                volume={volume}
                issue={issue}
                article={article}
            >
                <Topbar/>
                <NavOne/>
                <PageHeader title={"Volume " + volume + " Issue " + issue + " Article " + article}/>
                <CourseDetails
                    articles={articles}
                    volume={volume}
                    issue={issue}
                    article={article}
                    volumes={volumes}
                />
                <Footer/>
            </Layout>);
    }
}
