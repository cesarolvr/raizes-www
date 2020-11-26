import React from "react"

// Components
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"
import SEO from "../../components/Seo"
import Contact from "../../components/Contact"
import Roadmap from "../../components/Roadmap"

// Styles
import "../../styles/pages/Success.scss"

export default () => {
  return (
    <Layout className="success">
      <SEO title="Sucesso" />
      <Header />
      <Hero
        title="Recebemos sua proposta"
        description="Agora para a análise precisaremos de alguns documentos da sua empresa. Sua proposta e  documentação passará por um comitê que vai analisar seu pedido e as próximas etapas são: "
        backgroundColor={"#006BD0"}
      />
      <Roadmap
        steps={[
          {
            number: "1",
            title: "Análise prévia",
            description:
              "Nessa primeira etapa iremos fazer uma análise da sua empresa. Caso aprovada, enviaremos um email com os documentos necessários para a próxima etapa. ",
          },
          {
            number: "2",
            title: "Comitê de avaliação",
            description:
              "Formamos um comitê que analisa a viabilidade da sua proposta, utilizamos uma sólida politica de crédito, considerando ciclo operacional, financeiro e econômico, garantias, governança, estrutura de capital e societária.",
          },
          {
            number: "3",
            title: "Aprovação",
            description:
              "Nessa primeira etapa iremos fazer uma análise da sua empresa. Caso aprodava, enviaremos um email com os documentos necessários para a próxima etapa. ",
          },
        ]}
      />
      <Contact />
      <Footer />
    </Layout>
  )
}
