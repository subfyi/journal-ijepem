import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import Teachers from '../components/Teachers'
import Topbar from '../components/Topbar'
import AboutTwo from '../components/AboutTwo'
import SubscribeOne from '../components/SubscribeOne'

const TeachersPage = () => {
  return (
    <Layout pageTitle="Aim and Scope | IJEPEM">
      <Topbar />
      <NavOne />
      <PageHeader title="Aim and Scope" />
      <Teachers />
      <SubscribeOne />
      <Footer />
    </Layout>
  )
}

export default TeachersPage
