import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Type = ({ setType }) => {
  return (
    <div className="step">
      <h2 className="title" data-aos="fade-up"
              data-aos-delay={100}>Você é pessoa física ou pessoa jurídica?</h2>
      <ul className="card-list" data-aos="fade-up" data-aos-delay={200}>
        {[
          {
            text: "Pessoa física",
            icon: faArrowRight,
            value: "pf",
          },
          {
            text: "Pessoa jurídica",
            icon: faArrowRight,
            value: "pj",
          },
        ].map(({ text, icon, value }, index) => {
          return (
            <li
              key={index}
              className="item"
              onClick={() => setType("investorType", value)}
            >
              <p className="value">{text}</p>
              <FontAwesomeIcon icon={icon} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Type
