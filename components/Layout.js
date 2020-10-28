import React from 'react'
import Head from 'next/head'
import moment from 'moment'
import { DefaultSeo } from "next-seo";

const Layout = (props) => {
  const { articles, volume, issue, article, pageTitle } = props

  return (
    <div>
      <Head>

        {!articles && <title>{pageTitle}</title>}

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="generator" content="Sub Network Solutions" />


        {articles && <>
          <meta property="og:site_name" content="International Journal of Environmental Pollution and Environmental Modelling" />
          <meta property="og:image" content="/favicon/android-icon-192x192.png" />

          <link rel="canonical" href={process.env.DOMAIN + '/volume-' + articles.volume + '/issue-' + articles.issue + '/article-' + articles.order_num + '/'} />

          <link rel="schema.DC" href="http://purl.org/dc/elements/1.1/" />

          <meta name="DC.Contributor.Sponsor" xmlLang="en" content />

          <meta content={articles.updated_at} property="article:modified_time" />

          {articles.citations.map((citation, index) =>
            <meta name={'citation_reference.' + (index + 1)} content={citation.raw} />
          )}

          <meta name="DC.Title"
                content={articles.article_infos.find(el => el.lang_id == articles.primary_language).title}
          />
          <meta name="DC.Description" xmlLang="en"
                content={articles.article_infos.find(el => el.lang_id == articles.primary_language).abstract.replace(/(<([^>]+)>)/gi, '')} />
          <meta name="DC.Source" content="International Journal of Environmental Pollution and Environmental Modelling" />
          <meta name="DC.Source.ISSN" content="2618-6128" />
          <meta name="DC.Source.Issue" content={issue} />
          <meta name="DC.Source.URI" content={process.env.DOMAIN} />
          <meta name="DC.Source.Volume" content={volume} />
          <meta name="DC.Subject" xmlLang="en" content={(articles.keywords).filter(a => a.keyword.type == 'en').map(a => a.keyword.value).join(', ')} />

          <meta name="DC.Type" content="Text.Serial.Journal" />
          <meta name="DC.Type.articleType" content="article" />
          <meta name="DC.Date.created" scheme="ISO8601" content={articles.created_at} />
          <meta name="DC.Date.dateSubmitted" scheme="ISO8601" content={moment(articles.submission_date).format('DD-MM-YYYY')} />
          <meta name="DC.Date.issued" scheme="ISO8601" content={moment(articles.created_at).format('DD-MM-YYYY')} />
          <meta name="DC.Date.modified" scheme="ISO8601" content={articles.updated_at} />

          {articles.authors.map((authorin, index) =>
            <meta name={'DC.Creator.PersonalName.' + (index + 1)}
                  content={authorin.author.first_name + ' ' + ((authorin.author.middle_name && (authorin.author.middle_name + ' ')) || '') + authorin.author.last_name} />
          )}

          <meta name="DC.Format" scheme="IMT" content="application/pdf" />
          <meta name="DC.Identifier" content={articles.volume + articles.issue + articles.order_num + '/'} />
          <meta name="DC.Identifier.pageNumber" content={articles.first_page + '-' + articles.last_page} />
          <meta name="DC.Identifier.URI" content={process.env.DOMAIN + '/volume-' + articles.volume + '/issue-' + articles.issue + '/article-' + articles.order_num + '/'} />
          <meta name="DC.Language" content='tr scheme="ISO639-1"' />

          <meta name="gs_meta_revision" content="1.1" />

          <meta name="citation_journal_title" content="International Journal of Environmental Pollution and Environmental Modelling"
          />

          {articles.authors.map((authorin, index) =>
            <meta name={'citation_author.' + (index + 1)} content={authorin.author.first_name + ' ' + (authorin.author.middle_name && (authorin.author.middle_name + ' ')) + authorin.author.last_name} />
          )}
          <meta name="citation_title" content={articles.article_infos.find(el => el.lang_id == articles.primary_language).title} />

          <meta name="citation_date" content={moment(articles.pubdate).format('DD-MM-YYYY')} />
          <meta name="citation_publication_date" content={moment(articles.pubdate).format('DD-MM-YYYY')} />
          <meta name="citation_issn" content="2618-6128" />
          <meta name="citation_volume" content={volume} />
          <meta name="citation_issue" content={issue} />
          <meta name="citation_firstpage" content={articles.first_page} />
          <meta name="citation_lastpage" content={articles.last_page} />
          <meta name="citation_abstract_html_url" content={process.env.DOMAIN + '/volume-' + articles.volume + '/issue-' + articles.issue + '/article-' + articles.order_num + '/'}
          />
          <meta name="citation_language" content="en" />
          <meta name="citation_keywords" xmlLang="en" content={(articles.keywords).filter(a => a.keyword.type == 'en').map(a => a.keyword.value).join(', ')}
          />

          {articles.files.map((file, index) =>
            <meta name="citation_pdf_url" content={file.file} />
          )}


          {articles.citations.map((citation, index) =>
            <meta name={'citation_reference.' + (index + 1)} content={citation.citation.raw} />
          )}

          <meta id="meta_stats_updated_at" name="stats_updated_at" content={articles.updated_at} />

          <meta name="DC.Language" scheme="ISO639-1" content="en" />
          <meta name="DC.Rights" content={process.env.DOMAIN + '/doc/ijepem-copyright.pdf'} />

        </>}

        <link rel="apple-touch-icon" sizes="57x57" href={process.env.DOMAIN + '/favicon/apple-icon-57x57.png'} />
        <link rel="apple-touch-icon" sizes="60x60" href={process.env.DOMAIN + '/favicon/apple-icon-60x60.png'} />
        <link rel="apple-touch-icon" sizes="72x72" href={process.env.DOMAIN + '/favicon/apple-icon-72x72.png'} />
        <link rel="apple-touch-icon" sizes="76x76" href={process.env.DOMAIN + '/favicon/apple-icon-76x76.png'} />
        <link rel="apple-touch-icon" sizes="114x114" href={process.env.DOMAIN + '/favicon/apple-icon-114x114.png'} />
        <link rel="apple-touch-icon" sizes="120x120" href={process.env.DOMAIN + '/favicon/apple-icon-120x120.png'} />
        <link rel="apple-touch-icon" sizes="144x144" href={process.env.DOMAIN + '/favicon/apple-icon-144x144.png'} />
        <link rel="apple-touch-icon" sizes="152x152" href={process.env.DOMAIN + '/favicon/apple-icon-152x152.png'} />
        <link rel="apple-touch-icon" sizes="180x180" href={process.env.DOMAIN + '/favicon/apple-icon-180x180.png'} />
        <link rel="icon" type="image/png" sizes="192x192" href={process.env.DOMAIN + '/favicon/android-icon-192x192.png'} />
        <link rel="icon" type="image/png" sizes="32x32" href={process.env.DOMAIN + '/favicon/favicon-32x32.png'} />
        <link rel="icon" type="image/png" sizes="96x96" href={process.env.DOMAIN + '/favicon/favicon-96x96.png'} />
        <link rel="icon" type="image/png" sizes="16x16" href={process.env.DOMAIN + '/favicon/favicon-16x16.png'} />
        <link rel="manifest" href={process.env.DOMAIN + '/favicon/manifest.json'} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={process.env.DOMAIN + '/favicon/ms-icon-144x144.png'} />
        <meta name="theme-color" content="#ffffff" />

        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href={process.env.DOMAIN + '/assets/plugins/bootstrap/bootstrap.min.css'} />
        <link rel="stylesheet" href={process.env.DOMAIN + '/assets/css/animate.min.css'} />
        <link rel="stylesheet" href={process.env.DOMAIN + '/assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css'} />
        <link rel="stylesheet" href={process.env.DOMAIN + '/assets/plugins/kipso-icons/style.css'} />
        <link rel="stylesheet" href={process.env.DOMAIN + '/assets/css/style.css'} />
        <link rel="stylesheet" href={process.env.DOMAIN + '/assets/css/responsive.css'} />

      </Head>
      <DefaultSeo
        titleTemplate={"%s | IJEPEM"}
        title="International Journal of Environmental Pollution and Environmental Modelling"
        description={'International Journal of Environmental Pollution and Environmental Modelling (IJEPEM), Int. j. environ. pollut. environ. model., ISSN-2618-6128' || ''}
        keywords={'Environmental Pollution, Environmental Modeling, International Journal, peer review'}
      />

      <div className="page-wrapper">

        {props.children}

      </div>

      <script src="/assets/plugins/bootstrap/jquery.min.js"></script>
      <script src="/assets/plugins/bootstrap/bootstrap.min.js"></script>

    </div>
  )
}

export default Layout