import React from "react"

// Components
import Layout from "../../../components/Layout"
import Header from "../../../components/Header"
import Hero from "../../../components/Hero"
import Footer from "../../../components/Footer"
import SEO from "../../../components/Seo"
import Contact from "../../../components/Contact"
import Roadmap from "../../../components/Roadmap"

// Styles
import "../../../styles/pages/Success.scss"

export default () => {
  return (
    <Layout className="success">
      <SEO title="Sucesso" />
      <Header />
      <Hero
        title="Passo a passo para seu cadastro"
        description="Agora para a análise precisaremos de alguns documentos da sua empresa. Sua proposta e  documentação passará por um comitê que vai analisar seu pedido e as próximas etapas são: "
        backgroundColor={"#006BD0"}
      />
      <Roadmap
        steps={[
          {
            number: "1",
            title: "Cadastra Socopa",
            description:
              "Acesse <a class='color-blue -link' href='https://www.socopainvest.com.br/cadastro-passos/'>https://www.socopainvest.com.br/cadastro-passos/</a> e preencha o formulário até o final. A Socopa é um corretora de valores parceira do fundo raízes.",
          },
          {
            number: "2",
            title: "Preencha a ficha cadastral",
            description:
              "<a class='color-blue -link'>Enviado por email</a> |  Preciamos que você preencha e nos envie por email a Ficha Cadastral de pessoa Jurídica, com informações sobre sua a empresa.",
          },
          {
            number: "3",
            title: "Preencha o questionário do perfil do investidor ",
            description:
              "<strong class='color-blue'>Enviado por email</strong> |  Nessa etapa precisamos saber o seu perfil de investidor. São apenas 11 perguntas sobre seus objetivos e expectativas financeiras. Nos enviar digitalmente para <strong class='color-blue'>documentos@fundoraízes.com.br</strong>",
          },
          {
            number: "4",
            title: "Envio da documentação para o Fundo raízes",
            description:
              "A última etapa é enviar o questionátio e o termo de adesão para nosso escritório. Após que seu cadastro na Socopa for validado enviaremos outro email sobre esta etapa. ",
          },
        ]}
      />
      <Contact />
      <Footer />
    </Layout>
  )
}
