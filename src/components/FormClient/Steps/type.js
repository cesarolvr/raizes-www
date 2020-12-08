import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

// Mock
import { products } from "../../../mock"

const Type = ({ setType }) => {
  return (
    <div className="step">
      <h2 className="title">
        Qual tipo de crédito se adequa melhor a sua necessidade?
      </h2>
      <ul className="card-list">
        {[
          {
            text: "Antecipação de Recebíveis",
            icon: faArrowRight,
          },
          {
            text: "Capital de Giro",
            icon: faArrowRight,
          },
          {
            text: "Home Equity",
            icon: faArrowRight,
          },
          {
            text: "Cédula de Produtor Rural",
            icon: faArrowRight,
          },
          {
            text: "Antecipação de Contratos",
            icon: faArrowRight,
          },
          {
            text: "Domicílio Bancário",
            icon: faArrowRight,
          },
        ].map(({ text, icon }, index) => {
          return (
            <li
              key={index}
              className="item"
              onClick={() => setType("type", products[index].title)}
            >
              {text}
              <FontAwesomeIcon icon={icon} />
            </li>
          )
        })}
        <li className="item" onClick={() => setType("type", "not-sure")}>
          Não tenho certeza
          <FontAwesomeIcon icon={faArrowRight} />
        </li>
      </ul>
    </div>
  )
}

export default Type
