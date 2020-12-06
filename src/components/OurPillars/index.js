import React from "react"

// Styles
import "./OurPillars.scss"

// Assets
import pillar1 from "../../images/pillar-1.svg"
import pillar2 from "../../images/pillar-2.svg"
import pillar3 from "../../images/pillar-3.svg"

const OurPillars = () => {
  return (
    <section className="section ourpillars-section">
      <div className="container">
        <h2 className="title">Nossos pilares</h2>
        <hr className="divider" />
        <ol className="pillars-list">
          <li className="item" data-aos="fade-up"
              data-aos-delay={100}>
            <img className="icon" src={pillar1} alt="" />
            <p className="title">Segurança</p>
            <h5 className="description">
              Trabalhamos com processos rigorosos de análise e uma sólida
              política de crédito
            </h5>
          </li>
          <li className="item" data-aos="fade-up"
              data-aos-delay={200}>
            <img className="icon" src={pillar2} alt=""  />
            <p className="title">Inteligência</p>
            <h5 className="description">
              Contamos com um time de profissionais qualificados e experientes
              no mercado financeiro
            </h5>
          </li>
          <li className="item" data-aos="fade-up"
              data-aos-delay={300}>
            <img className="icon" src={pillar3} alt=""  />
            <p className="title">Tecnologia</p>
            <h5 className="description">
              Nosso processo garante soluções customizadas, rápidas e eficazes
              para seu negócio
            </h5>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default OurPillars
