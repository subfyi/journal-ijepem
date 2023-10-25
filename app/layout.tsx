import '../assets/style.scss'
import Layout from '@/layout/Layout'
import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext']
})

export const metadata = {
  title: 'IJEPEM - International Journal of Environmental Pollution and Environmental Modelling',
  description: 'International Journal of Environmental Pollution and Environmental Modelling (IJEPEM), Int. j. environ. pollut. environ. model., ISSN-2618-6128',
  openGraph: {
    title: 'IJEPEM - International Journal of Environmental Pollution and Environmental Modelling',
    description: 'International Journal of Environmental Pollution and Environmental Modelling (IJEPEM), Int. j. environ. pollut. environ. model., ISSN-2618-6128',
    url: 'https://ijepem.com/',
    siteName: 'IJEPEM',
    locale: 'en-US',
    type: 'website'
  },
  verification: {
    yandex: 'eb0ce401d7cd2df6'
  }
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <link rel='icon' href='/favicon.ico' />
    </head>
    <body className={poppins.className}>
    <div className="page-wrapper">
    <Layout>
      {children}
    </Layout>
    </div>
    </body>
    </html>
  )
}
