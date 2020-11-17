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
import backgroundPath from "../images/hero-capital-de-giro.jpg"
import image1 from "../images/thumb-compra-de-recebiveis.jpg"
import image2 from "../images/thumb-capital-de-giro.jpg"
import image3 from "../images/thumb-antecipacao-de-contratos.jpg"

export default () => {
  return (
    <Layout>
      <SEO title="Capital de Giro" />
      <Header />
      <Hero
        backgroundPath={backgroundPath}
        title="Capital de Giro"
        subtitle="Produtos"
        description="Modalidade de crédito perfeita para produtores rurais"
      />
      <article className="article">
        <div className="container">
          <p>
            Aqui, o objetivo é assegurar que um negócio seja capaz de continuar
            suas operações e que tenha capacidade suficiente para satisfazer
            tanto a dívida de curto prazo em vencimento quanto às despesas
            operacionais futuras.
            <br />
            <br />
            Tendo em vista esse objetivo, o Fundo Raízes disponibiliza para sua
            empresa, através de algumas formalizações, operações para sustentar
            o seu Capital de Giro. Sempre com uma garantia real atrelada à
            liberação do crédito, a formalização será concretizada através da
            antecipação de uma CCB celebrada entre a empresa e uma instituição
            financeira.
            <br />
            <br />
            A Cédula de Crédito Bancário (CCB) é um título de crédito emitido
            por pessoa física ou jurídica em favor de uma instituição financeira
            ou de entidade que se assemelhe. Esse título representa a promessa
            de pagamento em dinheiro decorrente de uma operação de crédito.
            <br />
            <br />
            Para ser caracterizado como uma Cédula de Crédito Bancário, o título
            em questão deve conter os seguintes requisitos:
          </p>
          <ol>
            <li>A denominação “Cédula de Crédito Bancário”</li>

            <li>
              A promessa do emitente de pagar a dívida em dinheiro no seu
              vencimento ou correspondente ao crédito utilizado
            </li>

            <li>
              A data e o lugar do pagamento da dívida e, para o caso de
              pagamento parcelado, as datas e os valores de cada uma das
              prestações.
            </li>

            <li>
              O nome da instituição credora, podendo conter cláusula à ordem
            </li>

            <li>A data e o lugar de sua emissão</li>

            <li>
              A assinatura do emitente e, se for o caso, do terceiro garantidor
              da obrigação, ou de seus respectivos mandatários.
            </li>
          </ol>
          <br />
          <p>
            Nós do Fundo Raízes antecipamos a CCB com garantia e com o
            Instrumento de Alienação Fiduciária devidamente registrada em
            cartório e especificada no documento. A garantia pode ser imóvel não
            operacional, máquinas, equipamentos e veículos.
          </p>
          <br />
          <h4 className="color-blue">Como Funciona:</h4>
          <p>
            <strong>CCB</strong>
            <br />É através deste instrumento, com data de pagamento futuro, que
            o Fundo Raízes faz a antecipação do valor a ser pago pela
            instituição emitente da cédula. As condições de pagamento da
            empresa, celebradas no fluxo de pagamento da cédula, são mantidas,
            mas o direito de recebimento é do Fundo Raízes.
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
            title: "Antecipação de recebíveis",
            description:
              "Modalidade de crédito perfeita para produtores rurais",
            link: "/antecipacao-de-recebiveis/",
          },
        ]}
      />
      <Contact />
      <Footer />
    </Layout>
  )
}
