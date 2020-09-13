import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const CourseDetails = (props) => {
  const { articles, volume, volumes, issue, article } = props

  return (
    <section className="course-details">

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="course-details__content">

              <div className="course-details__top">
                <div className="course-details__top-left">
                  <h2 className="course-details__title">{articles.en_title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="course-details__content">

              <p className="course-details__author">
                Writer(s): {articles.authors.map((authorin, index) =>
                <a href={'/author/' + authorin.author.id + '/'}>{authorin.author.first_name} {authorin.author.middle_name} {authorin.author.last_name} <sup>{index + 1}</sup>,{' '}</a>
              )}
              </p>

              <ul className="course-details__tab-navs list-unstyled nav nav-tabs" role="tablist">
                <li>
                  <a className="active" role="tab" data-toggle="tab" href="#overview">Abastract </a>
                </li>
                <li>
                  <a className="" role="tab" data-toggle="tab" href="#review">References</a>
                </li>
              </ul>
              <div className="tab-content course-details__tab-content ">
                <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                  <p className="course-details__tab-text">
                    {articles.en_abstract}

                  </p>
                  <br /><br />
                  <p className="course-details__author">
                    Keyword(s): {(articles.keywords).filter(a => a.keyword.type == 'en').map(a =>
                    <a href={'/keyword/' + a.keyword.id + '/'}>{a.keyword.name},{' '}</a>)}
                  </p>
                </div>

                <div className="tab-pane  animated fadeInUp" role="tabpanel" id="review">

                  <ul className="course-details__curriculum-list list-unstyled">
                    {articles.citations.map((citation, index) =>
                      <li>
                        <div className="course-details__curriculum-list-left">
                          [{index + 1}] {citation.raw}
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">


            <div className="course-details__price">
              <p className="course-details__price-text">Tam Metin </p>

              {articles.files.map((file, index) =>
                <a target="_blank" href={file.file} className="thm-btn course-details__price-btn">Dergipark [PDF]</a>
              )}

              <a target="_blank" href={'/doc/ijepem-' + moment(articles.pubdate).format('YY') + '-0' + issue + (article > 9 ? '-' : '-0') + article + '.pdf'}
                 className="thm-btn course-details__price-btn">IJEPEM [PDF]</a>

            </div>

            <div className="course-details__meta">
              <a href="#" className="course-details__meta-link">
                Article Language: <span>English</span>
              </a>
              <a href="#" className="course-details__meta-link">
                Year: <span>{moment(articles.pubdate).format('YYYY')}</span>
              </a>
              <a href="#" className="course-details__meta-link">
                Publication: <span>{'Volume ' + volume + ' Issue ' + issue}</span>
              </a>
              <a href="#" className="course-details__meta-link">
                Published: <span>  {moment(articles.pubdate).format('DD.MM.YYYY')}</span>
              </a>
              <a href="#" className="course-details__meta-link">
                Page: <span>  {articles.first_page}-{articles.last_page}</span>
              </a>
            </div>

            <div className="course-details__price">
              <div className=" text-center align-items-center">
                <a target="_blank" href={'/doc/ijepem-' + moment(articles.pubdate).format('YY') + '-0' + issue + '-00-00.pdf'}>
                  <img className="w-100 mb-3" src={require('../public/doc/ijepem-' + moment(articles.pubdate).format('YY') + '-0' + issue + '-00-00.png?resize&size=270')} alt="volume image" />
                </a>
                <a target="_blank" className="btn btn-outline-dark text-secondary col-md-12 mb-3"
                   href={'/doc/ijepem-' + moment(articles.pubdate).format('YY') + '-0' + issue + '-00-00.pdf'}>
                  COVER
                </a>
                <a target="_blank" className="btn btn-outline-dark text-secondary col-md-12 mb-3"
                   href={'/doc/ijepem-' + moment(articles.pubdate).format('YY') + '-00-00-01' + (articles.volumes.special && 1 ? '-s' : '') + '.pdf'}>
                  EDITORS
                </a>
                <a target="_blank" className="btn btn-outline-dark text-secondary col-md-12 mb-3" href={'/doc/ijepem-' + moment(articles.pubdate).format('YY') + '-00-00-02.pdf'}>
                  ABOUT
                </a>
                <a target="_blank" className="btn btn-outline-dark text-secondary col-md-12 mb-3"
                   href={'/doc/ijepem-' + moment(articles.pubdate).format('YY') + '-0' + issue + '-00-03.pdf'}>
                  CONTENTS
                </a>
              </div>
            </div>

          </div>

          <div className="col-lg-12">
            <br />
          </div>

          <div className="col-lg-12 blog-one__content">
            <h2 className="course-details__list-title">SOURCE SHOW </h2>


            <div className="course-details__list-item">
              <div className="course-details__list-content">

                <a href="#" className="course-details__meta-link">
                  Citation type: <span>APA</span>
                </a>
                <p>
                  <code>
                    {articles.authors.map((authorin, i, arr) =>
                      <>{authorin.author.first_name} {authorin.author.middle_name} {authorin.author.last_name}{i != (arr.length - 1) ? ', ' : ''}</>
                    )}. ({moment(articles.pubdate).format('YYYY')}). {articles.en_title}. Ulusal Çevre Bilimleri Araştırma
                    Dergisi, {volume + ' ( ' + issue + ' ) '}, {articles.first_page}-{articles.last_page}.
                    {' '}{'http://ijepem.com/volume-' + volume + '/issue-' + issue + '/article-' + article + '/'}
                  </code>
                </p>
              </div>
            </div>

            <div className="course-details__list-item">
              <div className="course-details__list-content">

                <a href="#" className="course-details__meta-link">
                  Citation type: <span>BibTex</span>
                </a>
                <p>
                  <code>
                    @article{'{'}{moment(articles.pubdate).format('YYYY')}, title={'{'}{articles.en_title}{'}'}, volume={'{'}{volume}{'}'}, number={'{'}{issue}{'}'},
                    publisher={'{'}International Journal of Environmental Pollution and Environmental Modelling{'}'}, author={'{'}{articles.authors.map((authorin, i, arr) =>
                    <>{authorin.author.first_name} {authorin.author.middle_name} {authorin.author.last_name}{i != (arr.length - 1) ? ', ' : ''}</>
                  )}{'}'}, year={'{'}{moment(articles.pubdate).format('YYYY')}{'}'}, pages={'{'}{articles.first_page}-{articles.last_page}{'}'} {'}'}
                  </code>
                </p>
              </div>
            </div>
            <div className="course-details__list-item">
              <div className="course-details__list-content">

                <a href="#" className="course-details__meta-link">
                  Citation type: <span>MLA</span>
                </a>
                <p>
                  <code>
                    {articles.authors.map((authorin, i, arr) =>
                      <>{authorin.author.first_name} {authorin.author.middle_name} {authorin.author.last_name}{i != (arr.length - 1) ? ', ' : ''}</>
                    )}. {articles.en_title}. no. {volume} International Journal of Environmental Pollution and Environmental Modelling, ({moment(articles.pubdate).format('YYYY')}),
                    pp. {articles.first_page}-{articles.last_page}.
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseDetails
