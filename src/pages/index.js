import React from "react"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/Seo"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Footer />
    </Layout>
  )
}

export default Home
