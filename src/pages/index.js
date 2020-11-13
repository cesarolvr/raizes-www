import React from "react"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import SEO from "../components/Seo"
import StepsSection from "../components/StepsSection"

// Assets
import backgroundPath from "../images/hero-produtor-rural.jpg"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Hero backgroundPath={backgroundPath} />
      <article className="article">
        <div className="container">
          <p>
            A Cédula de Produto Rural (CPR) é um título que representa uma
            promessa de entrega futura de um produto agropecuário, funcionando
            como um facilitador na produção e comercialização rural. Adquirimos
            a CPR e antecipamos os recursos ao produtor ou cooperativa, que se
            compromete a resgatar financeiramente a cédula no seu vencimento.
          </p>
          <p>
            O Fundo Raízes disponibiliza a produtores rurais, cooperativas,
            revendas de produtos agropecuários, cerealistas e demais agentes do
            agronegócio a possibilidade de antecipar a CPR-F, promovendo meios
            eficientes de suporte às atividades de financiamento da produção,
            intermediação e comercialização de produtos agropecuários.
          </p>

          <h4 className="color-blue">Como funciona:</h4>
          <strong>CPR-F</strong>
          <p>
            Para que tenha eficácia perante terceiros, a CPR deverá ser
            registrada no Cartório de Registro de Imóveis do domicílio do
            emitente e, caso haja penhor, hipoteca ou alienação fiduciária,
            deverá ser registrada, também, no Cartório de Registro de Imóveis no
            qual os bens estão empenhados ou alienados fiduciariamente
          </p>
        </div>
      </article>
      <StepsSection />
      <Footer />
    </Layout>
  )
}

export default Home
