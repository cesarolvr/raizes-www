import React from "react"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import SEO from "../components/Seo"

// Assets
import backgroundPath from '../images/hero-produtor-rural.jpg'

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Hero backgroundPath={backgroundPath} />
      <Footer />
    </Layout>
  )
}

export default Home
