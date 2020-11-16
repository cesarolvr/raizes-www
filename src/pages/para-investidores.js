import React from "react"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import SEO from "../components/Seo"
import Contact from "../components/Contact"
import StepsSection from "../components/StepsSection"
import Rating from "../components/Rating"
import Quotas from "../components/Quotas"
import Partners from "../components/Partners"

// Assets
import backgroundPath from "../images/hero-investidores.jpg"

// Styles
import "../styles/pages/Investors.scss"

const Investors = () => {
  return (
    <Layout className="investors">
      <SEO title="Para investidores" />
      <Header />
      <Hero
        backgroundPath={backgroundPath}
        title="Para investidores"
        subtitle="Invista"
        description="Invista em um fundo sólido com rentabilidade acima da média do mercado"
      />
      <article className="article">
        <div className="container">
          <p>
            O Fundo de Investimentos em Direitos Creditórios - FIDC -, é a
            atividade onde o foco principal é a gestão na antecipação de
            recebíveis, 100% lastreados podendo ser performado ou a performar,
            originados de operações financeiras, que vêm dos créditos que uma
            empresa tem a receber, como duplicatas e cheques, entre outros.
          </p>
          <p>
            O Fundo Raízes oferece uma consistente estrutura de garantias e
            proporciona taxas de rentabilidade acima da média do mercado quando
            comparado a ativos de risco equivalentes. É um dos poucos fundos
            abertos de crédito no Brasil com pagamento no resgate em até 30 dias
            e uma base de capital própria extremamente robusta, devido à baixa
            alavancagem. Em sua estruturação, contratou empresas parceiras de
            reconhecida credibilidade, know-how e eficiência, atendendo a todas
            as normas e determinações da CVM – Comissão de Valores Mobiliários.
          </p>
          <p>
            O Finergy Raízes é a Consultora Especializada do Fundo Raízes, um
            Fundo de Investimentos em Direitos Creditórios
            multicedente/multisacado que através da sua política de crédito
            prima por uma carteira pulverizada e com rigorosos critérios de
            elegibilidade dos títulos a serem negociados.
          </p>
          <p>
            A estrutura do Fundo Raízes é composta por: Consultor Especializado,
            Gestor, Administrador e Custodiante, cada um com funções
            específicas.
          </p>
          <p>
            O Consultor Especializado é o principal responsável pela
            “originação” dos direitos creditórios. Está sob sua responsabilidade
            manter o relacionamento com o cedente (tomador de crédito) para a
            aquisição dos direitos creditórios. Cabe ao consultor a análise,
            seleção e cobrança dos ativos, o que requer um sofisticado e robusto
            sistema de controle da carteira de recebíveis.
          </p>
        </div>
      </article>
      <Quotas />
      <article className="article">
        <div className="container">
          <h3>Garantias</h3>
          <p>
            As cotas seniores (adquiridas por investidores) são protegidas pelas
            cotas subordinadas, que funcionam como garantia, servindo como
            colchão para absorver eventuais inadimplências, garantindo assim ao
            cotista sênior a rentabilidade negociada na emissão. Ou seja, em uma
            eventual situação de crise, liquidam-se os direitos creditórios e,
            do montante apurado, paga-se os cotistas seniores em primeiro lugar,
            e, restando saldo, paga-se as cotas mezanino e por último os
            cotistas subordinados.
          </p>
          <br />
          <h3>Rentabilidade</h3>
          <p>
            As cotas seniores (adquiridas por investidores) são protegidas pelas
            cotas subordinadas, que funcionam como garantia, servindo como
            colchão para absorver eventuais inadimplências, garantindo assim ao
            cotista sênior a rentabilidade negociada na emissão. Ou seja, em uma
            eventual situação de crise, liquidam-se os direitos creditórios e,
            do montante apurado, paga-se os cotistas seniores em primeiro lugar,
            e, restando saldo, paga-se as cotas mezanino e por último os
            cotistas subordinados.
          </p>
        </div>
      </article>
      <Rating />
      <Partners />
      <StepsSection title="Como investir" />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default Investors
