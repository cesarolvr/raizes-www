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
          <img
            className="image-section"
            src={sectionImage}
            alt="Seja um investidor"
          />
        </div>
        <div className="holder">
          <h2 className="title" data-aos="fade-up" data-aos-delay={50}>
            Seja um investidor
          </h2>
          <hr className="divider" />
          <p className="description" data-aos="fade-up" data-aos-delay={100}>
            Temos 4 alicerces fundamentais: Segurança, Diversificação,
            Rentabilidade e Gestão de Risco.
            <br />
            <strong>Segurança:</strong> os investidores têm 100% do capital da empresa como
            respaldo aos seus investimentos.
            <br />
            <strong>Diversificação:</strong> são mais de 200 clientes ativos com baixa exposição
            de concentração - inferior a 3% do ativo total.
            <br />
            <strong>Rentabilidade:</strong> a remuneração supera 300% do CDI.
            <br />
            <strong>Gestão </strong>de Risco: toda a carteira de ativos passa por um rigoroso
            processo de a análise vertical e horizontal.
          </p>
          <button className="button" data-aos="fade-up" data-aos-delay={150}>
            <a href="/para-investidores/">Saiba mais</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default BeAInvestor
