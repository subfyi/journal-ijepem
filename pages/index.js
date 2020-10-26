import React from 'react'
import Layout from '../components/Layout'
import Topbar from '../components/Topbar'
import NavOne from '../components/NavOne'
import Footer from '../components/Footer'
import AboutTwo from '../components/AboutTwo'
import AboutOne from '../components/AboutOne'
import SubscribeOne from '../components/SubscribeOne'
import Seo from '../components/Common/Seo'


const HomePage = () => (

  <Layout>
    <Seo
      title="International Journal of Environmental Pollution and Environmental Modelling"
      description={'International Journal of Environmental Pollution and Environmental Modelling (IJEPEM), Int. j. environ. pollut. environ. model., ISSN-2618-6128' || ''}
      keywords={'Environmental Pollution, Environmental Modeling, International Journal, peer review'}
    />
    <Topbar />
    <NavOne />
    <AboutOne />
    <AboutTwo />
    <SubscribeOne />
    <Footer />
  </Layout>

)

export default HomePage