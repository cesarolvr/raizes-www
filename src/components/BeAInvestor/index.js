import React from "react"

// Styles
import "./BeAInvestor.scss"

// Assets
import sectionImage from "../../images/be-a-investor.jpg"

const BeAInvestor = () => {
  return (
    <section className="section beainvestor-section">
      <div className="container">
        <div className="holder">
          <img className="image-section" src={sectionImage} alt="Seja um investidor" />
        </div>
        <div className="holder">
          <h2 className="title" data-aos="fade-up" data-aos-delay={50}>Seja um investidor</h2>
          <hr className="divider" />
          <p className="description" data-aos="fade-up" data-aos-delay={100}>
            Formado em Administração de Empresas pela FAAP-SP, fez MBA
            Internacional na Vanderbit University pela USP e MBA no Insper;
            trabalhou em diversas instituições financeiras como: Chase
            Manhattan, Banco Fator, Private Banking do HSBC, especializou-se no
            Mercado Brasileiro de Hedge Funds e Alocação de Ativos.
          </p>
          <button className="button" data-aos="fade-up" data-aos-delay={150}><a href="/para-investidores/">Saiba mais</a></button>
        </div>
      </div>
    </section>
  )
}

export default BeAInvestor
