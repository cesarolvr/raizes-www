import React from "react"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import SEO from "../components/Seo"
import Contact from "../components/Contact"
import Accordion from "../components/Accordion"

// Styles
import "../styles/pages/Faq.scss"

const Faq = () => {
  return (
    <Layout className="faq">
      <SEO title="FAQ" />
      <Header />
      <Hero
        title="Perguntas frequentes"
        subtitle="Dúvidas"
        description="Tire suas dúvidas sobre o Fundo Raízes e nossos produtos"
        backgroundColor={"linear-gradient(80deg, #00A4EA, #006BD0)"}
      />
      <Accordion />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default Faq
