import React from "react"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import SEO from "../components/Seo"
import Quote from "../components/Quote"
import Related from "../components/Related"
import Contact from "../components/Contact"
import WhatWeDo from "../components/WhatWeDo"
import Numbers from "../components/Numbers"
import BeAInvestor from "../components/BeAInvestor"
import OurProcesses from "../components/OurProcesses"

// Assets
import backgroundPath from "../images/hero-home.jpg"
import image1 from "../images/thumb-compra-de-recebiveis.jpg"
import image2 from "../images/thumb-capital-de-giro.jpg"
import image3 from "../images/thumb-antecipacao-de-contratos.jpg"

// Styles
import "../styles/pages/Home.scss"

const Home = () => {
  return (
    <Layout className="home">
      <SEO title="Home" />
      <Header />
      <Hero
        backgroundPath={backgroundPath}
        title="Experiência, Tecnologia, Inteligência"
        subtitle="Fundo Raízes"
        description="Invista em um fundo sólido com rentabilidade acima da média do mercado"
      />
      <article className="article">
        <div className="container">
          <p>
            Raízes é um Fundo de Investimento em Direitos Creditórios
            especializado na compra de recebíveis provenientes de vendas
            mercantis de bens e serviços ou contratos de fornecimento nos
            diversos segmentos da economia e agronegócio.
          </p>
        </div>
      </article>
      <Related
        id="para-sua-empresa"
        title="Temos a solução de crédito para seu negócio"
        list={[
          {
            image: image1,
            title: "Antecipação de recebíveis",
            description:
              "Modalidade de crédito perfeita para produtores rurais",
            link: "/antecipacao-de-recebiveis/",
          },
          {
            image: image2,
            title: "Capital de Giro",
            description:
              "Modalidade de crédito perfeita para produtores rurais",
            link: "/capital-de-giro/",
          },
          {
            image: image3,
            title: "Cédula de produto rural",
            description:
              "Modalidade de crédito perfeita para produtores rurais",
            link: "/cedula-de-produto-rural/",
          },
          {
            image: image1,
            title: "Home equity",
            description:
              "Modalidade de crédito perfeita para produtores rurais",
            link: "/home-equity/",
          },
          {
            image: image2,
            title: "Domicílio bancário",
            description:
              "Modalidade de crédito perfeita para produtores rurais",
            link: "/domicilio-bancario/",
          },
          {
            image: image3,
            title: "Domicílio bancário",
            description:
              "Modalidade de crédito perfeita para produtores rurais",
            link: "/domicilio-bancario/",
          },
        ]}
      />
      <Numbers />
      <BeAInvestor />
      <WhatWeDo />
      <OurProcesses />
      <Quote />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default Home
