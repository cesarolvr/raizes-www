import React from "react"

// Styles
import "./OurTrajectory.scss"

const OurTrajectory = ({
  timeline = [
    {
      year: "2015",
      money: "30 milhões",
      complement: "em créditos concedidos",
      description:
        "O Fundo Raízes inicia suas operácões em São Paulo,  concedendo 30 milhões em crédito para 10 clientes",
    },
    {
      year: "2016",
      money: "50 milhões",
      complement: "em créditos concedidos",
      description:
        "O Fundo Raízes inicia suas operácões em São Paulo,  concedendo 30 milhões em crédito para 10 clientes",
    },
    {
      year: "2017",
      money: "107 milhões",
      complement: "em créditos concedidos",
      description:
        "O Fundo Raízes inicia suas operácões em São Paulo,  concedendo 30 milhões em crédito para 10 clientes",
    },
    {
      year: "2018",
      money: "150 milhões",
      complement: "em créditos concedidos",
      description:
        "O Fundo Raízes inicia suas operácões em São Paulo,  concedendo 30 milhões em crédito para 10 clientes",
    },
    {
      year: "2019",
      money: "215 milhões",
      complement: "em créditos concedidos",
      description:
        "O Fundo Raízes inicia suas operácões em São Paulo,  concedendo 30 milhões em crédito para 10 clientes",
    },
    {
      year: "2020",
      money: "180 milhões",
      complement: "em créditos concedidos",
      description:
        "O Fundo Raízes inicia suas operácões em São Paulo,  concedendo 30 milhões em crédito para 10 clientes",
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
                <div className="item" key={index}>
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
