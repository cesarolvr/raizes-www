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
import backgroundPath from "../images/hero-home-equity.jpg"
import image1 from "../images/thumb-domicilio-bancario.jpg"
import image2 from "../images/thumb-capital-de-giro.jpg"
import image3 from "../images/thumb-antecipacao-de-contratos.jpg"

export default () => {
  return (
    <Layout>
      <SEO title="Home Equity" />
      <Header />
      <Hero
        backgroundPath={backgroundPath}
        title="Home equity"
        subtitle="Produtos"
        description="Modalidade de credito para prazos mais longos"
      />
      <article className="article">
        <div className="container">
          <p>
            Home equity é o termo em inglês para a modalidade de empréstimo com
            imóvel de garantia. Ele funciona da seguinte forma: uma empresa que
            busca crédito em alguma instituição financeira aceita ceder um
            imóvel quitado e em seu nome à instituição como forma de garantia
            pelo crédito, mas somente até a operação ser quitada. Assim, o banco
            se torna dono do imóvel durante o período que a dívida existir -
            existe a transferência da propriedade para o nome do banco ou
            instituição. É um processo de alienação fiduciária.
            <br />
            <br />
            A formalização desta operação é a CCB e sua Alienação Fiduciária. A
            partir desses instrumentos, o Fundo Raízes faz esta antecipação, que
            poderá ser usada para pagamento dos compromissos atuais ou
            investimentos em sua empresa.
            <br />
            <br />
            A Cédula de Crédito Bancário (CCB) é um título de crédito emitido
            por pessoa física ou jurídica em favor de uma instituição financeira
            ou de entidade que se assemelhe. Esse título representa a promessa
            de pagamento em dinheiro decorrente de uma operação de crédito.
            <br />
            Para ser caracterizado como uma Cédula de Crédito Bancário, o título
            em questão deve conter os seguintes requisitos:
          </p>
          <ol>
            <li> A denominação “Cédula de Crédito Bancário”</li>

            <li>
              {" "}
              A promessa do emitente de pagar a dívida em dinheiro no seu
              vencimento ou correspondente ao crédito utilizado
            </li>

            <li>
              {" "}
              A data e o lugar do pagamento da dívida e, para o caso de
              pagamento parcelado, as datas e os valores de cada uma das
              prestações.
            </li>

            <li>
              {" "}
              O nome da instituição credora, podendo conter cláusula à ordem
            </li>

            <li> A data e o lugar de sua emissão</li>

            <li>
              {" "}
              A assinatura do emitente e, se for o caso, do terceiro garantidor
              da obrigação, ou de seus respectivos mandatários.
            </li>
          </ol>
          <br />
          <p>
            Nós do Fundo Raízes antecipamos a CCB com garantia e com o
            Instrumento de Alienação Fiduciária devidamente registrada em
            cartório e especificada no documento. Para este caso, a garantia é o
            imóvel.
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
            title: "Domicílio bancário",
            description: "Modalidade para aumentar a liquidez dos recebíveis",
            link: "/domicilio-bancario/",
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
            title: "Antecipação de recebíveis",
            description: "Modalidade de credito para fluxo financeiro diário",
            link: "/antecipacao-de-recebiveis/",
          },
        ]}
      />
      <Contact />
      <Footer />
    </Layout>
  )
}
