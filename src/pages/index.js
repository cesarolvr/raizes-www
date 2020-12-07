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
import image1 from "../images/thumb-antecipacao-de-recebiveis.jpg"
import image2 from "../images/thumb-capital-de-giro.jpg"
import image3 from "../images/thumb-cedula-de-produtor-rural.jpg"
import image4 from "../images/thumb-home-equity.jpg"
import image5 from "../images/thumb-domicilio-bancario.jpg"
import image6 from "../images/thumb-cedula-de-produtor-rural.jpg"

// Styles
import "../styles/pages/Home.scss"

const Home = () => {
  return (
    <Layout className="home">
      <SEO title="Home" />
      <Header />
      <Hero
        backgroundPath={backgroundPath}
        backgroundVideo
        title="Experiência, Tecnologia, Inteligência"
        subtitle="Fundo Raízes"
        description="Soluções de crédito para pequenas e médias empresas"
      />
      <article className="article">
        <div className="container">
          <p data-aos="fade-up">
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
        description=" Oferecemos  soluções que viabilizam o capital de giro e demais necessidades financeiras para sua empresa."
        list={[
          {
            image: image1,
            title: "Antecipação de recebíveis",
            description: "Modalidade de crédito para fluxo financeiro diário",
            link: "/antecipacao-de-recebiveis/",
          },
          {
            image: image2,
            title: "Capital de Giro",
            description:
              "Modalidade para incrementar  a disponibilidade  de caixa",
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
            image: image4,
            title: "Home equity",
            description: "Modalidade de credito para prazos mais longos",
            link: "/home-equity/",
          },
          {
            image: image5,
            title: "Domicílio bancário",
            description: "Modalidade para aumentar a liquidez dos recebíveis",
            link: "/domicilio-bancario/",
          },
          {
            image: image6,
            title: "Antecipação de contratos",
            description:
              "Antecipe contratos de suprimento ou prestação de serviços",
            link: "/antecipacao-de-contratos/",
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
