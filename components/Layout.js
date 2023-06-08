import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import Head from 'next/head'
import { DefaultSeo } from "next-seo"

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
    </div>
  )
}

export default Layout