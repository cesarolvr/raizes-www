import React from "react"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import SEO from "../components/Seo"
import Contact from "../components/Contact"
import Numbers from "../components/Numbers"
import OurPillars from "../components/OurPillars"
import OurTrajectory from "../components/OurTrajectory"

// Assets
import backgroundPath from "../images/hero-quem-somos.jpg"

// Styles
import "../styles/pages/Quem-somos.scss"

const Investors = () => {
  return (
    <Layout className="quem-somos">
      <SEO title="Quem Somos" />
      <Header />
      <Hero
        backgroundPath={backgroundPath}
        title="Nossa história"
        subtitle="Quem Somos"
        description="Invista em um fundo sólido com rentabilidade acima da média do mercado"
      />
      <article className="article">
        <div className="container">
          <p>
            Nossa história se deu inicio em meados 2014 quando o Brasil se
            encontrava em difícil situacao politica e economica. Havia
            expecatitiva de grande retracao em nosso PIB com reducao na
            capacidade de credito para as pequenas e medias empresas, era
            evidente e inevitável o credit crunch em nossa economia abrindo
            espaco e oportunidades para novas empresas de credito. Iniciamos com
            estrutura e profissionais experientes advindos do mercado
            financeiro, aliando tecnológia e conhecimento. Nos envolvemos em
            todos os processos, entregando soluções customizadas, rápidas e
            eficazes para nossos clientes. A diligência rigorosa em nossos
            investimentos proporciona segurança aos investidores, o que
            contribui para retornos acima da média do mercado.
          </p>
        </div>
      </article>
      <OurPillars />
      <Numbers />
      <OurTrajectory />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default Investors
