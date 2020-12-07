import React from "react"

// Styles
import "./OurTrajectory.scss"

const OurTrajectory = ({
  timeline = [
    {
      year: "2014",
      description: "Constituição da Raizes perante aos órgãos reguladores",
    },
    {
      year: "2015",
      money: "30 milhões",
      complement: "em créditos concedidos",
      description: "Inicio das operações com 30 clientes ativos ",
    },
    {
      year: "2016",
      money: "50 milhões",
      complement: "em créditos concedidos",
      description:
        "Implementação de 3 sistemas gerenciais e de Risco para a analise de decisão. ",
    },
    {
      year: "2017",
      money: "107 milhões",
      complement: "em créditos concedidos",
      description:
        "Desenvolvimento do Banco Digital Raizes, melhoria constante em nossos processos de gestão e risco. 85 clientes ativos.",
    },
    {
      year: "2018",
      money: "150 milhões",
      complement: "em créditos concedidos",
      description:
        "Contratação do gestor de risco, implementação de novas politicas de governança para o mercado  institucional e investidores.  130 clientes ativos e 60 Escrows accounts abertas",
    },
    {
      year: "2019",
      money: "215 milhões",
      complement: "em créditos concedidos",
      description:
        "Execução  e implementação do Banco Digital Raizes. 165 clientes ativos, 20 colaboradores 7 sistemas integrados sendo :ERP, CRM, Risco, LwCrow BI, SisBacen, Jusbrasil, Upminer",
    },
    {
      year: "2020",
      money: "180 milhões",
      complement: "em créditos concedidos",
      description:
        "Implementação da Nova Plataforma Agricola visando negociação de CPR para credito Rural e Boi Gordo. Expansão comercial para o interior de MT com novas estruturas de credito",
    },
  ],
}) => {
  return (
    <section className="section our-trajectory-section">
      <div className="container">
        <div className="holder">
          <div className="title">Nossa trajetória</div>
          <hr className="divider" />
          <div className="timeline-list">
            {timeline.map(({ year, money, description, complement }, index) => {
              return (
                <div
                  className="item"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="content">
                    <h4 className="year">{year}</h4>
                    <h5 className="money">{money}</h5>
                    <h6 className="complement">{complement}</h6>
                    <p className="description">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTrajectory
