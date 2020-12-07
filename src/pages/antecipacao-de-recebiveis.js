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
import backgroundPath from "../images/hero-antecipacao-de-recebiveis.jpg"
import image1 from "../images/thumb-home-equity.jpg"
import image2 from "../images/thumb-capital-de-giro.jpg"
import image3 from "../images/thumb-antecipacao-de-contratos.jpg"

export default () => {
  return (
    <Layout>
      <SEO title="Antecipação de Recebíveis" />
      <Header />
      <Hero
        backgroundPath={backgroundPath}
        title="Antecipação de Recebíveis"
        subtitle="Produtos"
        description="Modalidade de credito para fluxo financeiro diário."
      />
      <article className="article">
        <div className="container">
          <p>
            Todos os títulos antecipados com o Fundo Raízes são pagos pelo
            sacado, que pode fazê-lo através do pagamento dos boletos ou
            depósito em conta. Para este último caso, sugerimos que uma conta de
            domicílio - conta escrow - seja aberta para recebimento desses
            títulos.
          </p>
          <h4 className="color-blue">O que é uma conta Escrow?</h4>
          <p>
            A conta escrow é uma conta aberta em nome da empresa cliente. A
            movimentação da conta escrow é de responsabilidade de um terceiro –
            neste caso, o Fundo Raízes – que garante a liquidação de acordo com
            a negociação junto aos fundos.
            <br />
            <br />
            A conta escrow é onde se efetiva a trava do domicílio simples ou a
            trava perfeita da operação para o cumprimento da finalidade nela
            estabelecida.
            <br />
            <br />
            <strong>Domicílio Simples - Trava Perfeita </strong> <br />
            Nessa modalidade, a comunicação entre o Cedente e o Sacado é através
            de um comunicado simples, como um e-mail por exemplo. O cliente é
            orientado a realizar o pagamento em uma conta escrow predeterminada
            e formalizada por um Termo de Movimentação e uma Procuração Pública
            entre o cedente e o próprio Fundo Raízes.
            <br />
            <br />
            <strong>Trava Perfeita</strong>
            <br />
            Aqui, a comunicação entre o Cedente e o Sacado é formal e notificada
            por meio de uma Carta Modelo assinada pelas duas partes. Alterações
            relativas ao pagamento devem passar pela autorização do Fundo
            Raízes.
          </p>
        </div>
      </article>
      <StepsSection />
      <Related
        list={[
          {
            image: image1,
            title: "Home Equity",
            description:
              "Modalidade de credito para prazos mais longos",
            link: "/home-equity/",
          },
          {
            image: image2,
            title: "Capital de Giro",
            description:
              "Modalidade para incrementar  a disponibilidade  de caixa.",
            link: "/capital-de-giro/",
          },
          {
            image: image3,
            title: "Antecipação de recebíveis",
            description:
              "Modalidade de credito para fluxo financeiro diário",
            link: "/antecipacao-de-recebiveis/",
          },
        ]}
      />
      <Contact />
      <Footer />
    </Layout>
  )
}
