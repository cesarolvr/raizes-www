import React from "react"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import SEO from "../components/Seo"
import StepsSection from "../components/StepsSection"
import Related from "../components/Related"
import Contact from "../components/Contact"

// Assets
import backgroundPath from "../images/hero-produtor-rural.jpg"
import image1 from "../images/thumb-compra-de-recebiveis.jpg"
import image2 from "../images/thumb-capital-de-giro.jpg"
import image3 from "../images/thumb-antecipacao-de-contratos.jpg"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Hero
        backgroundPath={backgroundPath}
        title="Cédula de Produtor Rural"
        subtitle="Produtos"
        description="Modalidade de crédito perfeita para produtores rurais"
      />
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
      <Related
        list={[
          {
            image: image1,
            title: "Compra de recebíveis",
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
            title: "Antecipação de contratos",
            description:
              "Modalidade de crédito perfeita para produtores rurais",
            link: "/antecipacao-de-contratos/",
          },
        ]}
      />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default Home
