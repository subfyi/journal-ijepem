import React from 'react';
import Head from 'next/head';
import moment from "moment";

const Layout = (props) => {
    const {articles, volume, issue, article, pageTitle} = props;

    return (
        <div>
            <Head>

                <title>{pageTitle}</title>

                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>

                <link
                    rel="icon"
                    href="https://ijepem.com/public/journals/3/favicon_en_US.png"
                />
                <meta name="generator" content="SUB Network Solutions"/>
                {articles && <>

                    <link rel="schema.DC" href="https://purl.org/dc/elements/1.1/"/>

                    {articles.authors.map((authorin, index) =>
                        <meta name="DC.Creator.PersonalName"
                              content={authorin.author.first_name + " " + (authorin.author.middle_name && (authorin.author.middle_name + " ")) + authorin.author.last_name}/>
                    )}

                    <meta name="DC.Date.created"
                          scheme="ISO8601"
                          content={articles.created_at}/>
                    <meta name="DC.Date.dateSubmitted"
                          scheme="ISO8601"
                          content={moment(articles.submission_date).format("DD-MM-YYYY")}/>
                    <meta name="DC.Date.issued"
                          scheme="ISO8601"
                          content={moment(articles.created_at).format("DD-MM-YYYY")}/>
                    <meta name="DC.Date.modified"
                          scheme="ISO8601"
                          content={articles.updated_at}/>
                    <meta name="DC.Description"
                          xmlLang="en"
                          content={articles.en_abstract}/>

                    <meta name="DC.Format" scheme="IMT" content="application/pdf"/>


                    <meta name="DC.Identifier" content={articles.volume + articles.issue + articles.order_num}/>
                    <meta name="DC.Identifier.pageNumber" content={articles.first_page + "-" + articles.last_page}/>
                    <meta
                        name="DC.Identifier.URI"
                        content={"https://ijepem.com/volume/" + articles.volume + "/issue/" + articles.issue + "/article/" + articles.order_num}
                    />

                    <meta name="DC.Language" scheme="ISO639-1" content="en"/>

                    <meta name="DC.Rights"
                          content="Copyright (c) 2020 International Journal of Environmental Pollution and Environmental Modelling"
                    />
                    <meta name="DC.Rights"
                          content="https://creativecommons.org/licenses/by-nc-nd/4.0"
                    />
                    <meta name="DC.Rights"
                          content="https://ijepem.com/doc/ijepem-copyright.pdf"/>

                    <meta
                        name="DC.Source"
                        content="International Journal of Environmental Pollution and Environmental Modelling"
                    />
                    <meta name="DC.Source.ISSN" content="2618-6128"/>
                    <meta name="DC.Source.Issue" content={issue}/>
                    <meta name="DC.Source.Volume" content={volume}/>
                    <meta name="DC.Source.URI" content="https://ijepem.com"/>

                    <meta
                        name="DC.Subject"
                        xmlLang="en"
                        content={(articles.keywords).filter(a => a.keyword.type == "en").map(a => <>{a.keyword.value}, </>)}
                    />

                    <meta name="DC.Title"
                          content={articles.en_title}
                    />

                    <meta name="DC.Type" content="Text.Serial.Journal"/>
                    <meta name="DC.Type.articleType" content="Articles"/>
                    <meta name="gs_meta_revision" content="1.1"/>
                    <meta
                        name="citation_journal_title"
                        content="International Journal of Environmental Pollution and Environmental Modelling"
                    />
                    <meta
                        name="citation_journal_abbrev"
                        content="Int. j. environ. pollut. environ. model."
                    />
                    <meta name="citation_issn" content="2618-6128"/>

                    {articles.authors.map((authorin, index) =>
                        <meta name="citation_author"
                              content={authorin.author.first_name + " " + (authorin.author.middle_name && (authorin.author.middle_name + " ")) + authorin.author.last_name}/>
                    )}

                    <meta name="citation_title" content={articles.en_title}/>

                    <meta name="citation_language" content="en"/>
                    <meta name="citation_date" content={moment(articles.pubdate).format("DD-MM-YYYY")}/>
                    <meta name="citation_publication_date" content={moment(articles.pubdate).format("DD-MM-YYYY")}/>
                    <meta name="citation_volume" content={volume}/>
                    <meta name="citation_issue" content={issue}/>
                    <meta name="citation_firstpage" content={articles.first_page}/>
                    <meta name="citation_lastpage" content={articles.last_page}/>

                    <meta
                        name="citation_abstract_html_url"
                        content={"https://ucbad.com/volume/" + articles.volume + "/issue/" + articles.issue + "/article/" + articles.order_num}
                    />
                    <meta
                        name="citation_keywords"
                        xmlLang="tr"
                        content={(articles.keywords).filter(a => a.keyword.type == "tr").map(a => <a>{a.keyword.value}</a>)}
                    />

                    {articles.files.map((file, index) =>
                        <meta name="citation_pdf_url" content={file.file}/>
                    )}

                    {articles.citations.map((citation, index) =>
                        <meta
                            name="citation_reference"
                            content={citation.raw}
                        />
                    )}

                    <meta
                        property="article:modified_time"
                        content={articles.updated_at}
                    />
                    <meta
                        property="og:type"
                        content="article"/>
                    <meta
                        property="og:title"
                        content={articles.tr_title}/>

                    {articles.files.map((file, index) =>
                        <meta
                            content={file.file}
                            property="og:url"/>
                    )}

                    <meta
                        id="meta_stats_updated_at"
                        name="stats_updated_at"
                        content={articles.updated_at}
                    />

                </>}


                <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>

                <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="/assets/plugins/bootstrap/bootstrap.min.css"/>
                <link rel="stylesheet" href="/assets/css/animate.min.css"/>
                <link rel="stylesheet" href="/assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css"/>
                <link rel="stylesheet" href="/assets/plugins/kipso-icons/style.css"/>
                <link rel="stylesheet" href="/assets/css/style.css"/>
                <link rel="stylesheet" href="/assets/css/responsive.css"/>

            </Head>

            <div className="page-wrapper">

                {props.children}

            </div>

            <script src="/assets/plugins/bootstrap/jquery.min.js"></script>
            <script src="/assets/plugins/bootstrap/bootstrap.min.js"></script>

        </div>
    );
}

export default Layout;