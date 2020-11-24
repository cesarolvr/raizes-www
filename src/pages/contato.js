import React from "react"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FormContact from "../components/FormContact"
import SEO from "../components/Seo"

// Styles
import "../styles/pages/Home.scss"

export default () => {
  return (
    <Layout className="home">
      <SEO title="Contato" />
      <Header />
      <FormContact />
      <Footer />
    </Layout>
  )
}
