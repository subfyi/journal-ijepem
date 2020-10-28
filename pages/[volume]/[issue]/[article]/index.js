import React from 'react'
import Layout from '../../../../components/Layout'
import NavOne from '../../../../components/NavOne'
import PageHeader from '../../../../components/PageHeader'
import CourseDetails from '../../../../components/CourseDetails'
import SimpleReactValidator from 'simple-react-validator'
import api from '../../../../api'
import Footer from '../../../../components/Footer'
import Topbar from '../../../../components/Topbar'
import Seo from '../../../../components/Common/Seo'

export default class Courses extends React.Component {
  state = {}

  constructor(props) {
    super(props)

    this.validator = new SimpleReactValidator()
  }

  static async getInitialProps({ query }) {
    const id = query.volume.split('-').slice(-1)[0]
    const issue = query.issue.split('-').slice(-1)[0]
    const article = query.article.split('-').slice(-1)[0]
    var articles = await api('/api/article?page=1&itemPerPage=-1&journal_id=1&volume=' + id + '&issue=' + issue + '&article=' + article)
    return {
      articles: articles.data[0],
      volume: id,
      issue: issue,
      article: article
    }
  }

  render() {
    const { articles, volume, issue, article } = this.props

    if (!articles) {
      return <div>404</div>
    }

    return (
      <Layout
        articles={articles}
        volume={volume}
        issue={issue}
        article={article}
      >
        <Seo
          title={(articles.article_infos.find(el => el.lang_id == articles.primary_language).title + ' | IJEPEM ' || '').substr(0, 70) + '...'}
          description={(articles.article_infos.find(el => el.lang_id == articles.primary_language).abstract || '').replace(/[\r\n]/g, ' ')}
          keywords={(articles.keywords).filter(a => a.keyword.type == 'en').map(a => a.keyword.value).join(', ')}

          openGraph={{
            title: articles.article_infos.find(el => el.lang_id == articles.primary_language).title + ' | IJEPEM ',
            description: (articles.article_infos.find(el => el.lang_id == articles.primary_language).abstract.replace(/(<([^>]+)>)/gi, "") || '').replace(/[\r\n]/g, ' '),
            url: process.env.DOMAIN + '/volume-' + articles.volume + '/issue-' + articles.issue + '/article-' + articles.order_num + '/',
            type: 'article',
            article: {
              publishedTime: articles.pubdate,
              modifiedTime: articles.updated_at,
              section: 'Volume ' + articles.volume + ' Issue ' + articles.issue + ' Article ' + articles.order_num,
              authors:
                articles.authors.map((authorin, index) =>
                  process.env.DOMAIN + '/author/' + authorin.author.id + '/'
                ),
              tags: (articles.keywords).map(a => a.keyword.name)
            },
          }}
        />
        <Topbar />
        <NavOne />
        <PageHeader title={'Volume ' + volume + ' Issue ' + issue + ' Article ' + article} />
        <CourseDetails
          articles={articles}
          volume={volume}
          issue={issue}
          article={article}
        />
        <Footer />
      </Layout>)
  }
}
