import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default ({ setQuota }) => {
  return (
    <div className="step">
      <h2 className="title" >Você tem interesse em qual das nossas cotas?</h2>
      <ul className="card-list">
        {[
          {
            text: "R$ 25.000,00",
            icon: faArrowRight,
            subtitle: "Cota sênior",
          },
          {
            text: "R$ 300.000,00",
            icon: faArrowRight,
            subtitle: "Cota mezanino",
          },
        ].map(({ text, icon, subtitle }, index) => {
          return (
            <li
              key={index}
              className="item"
              onClick={() => setQuota("quota", text)}
            >
              <small className="subtitle">{subtitle}</small>
              <p className="value">{text}</p>
              <FontAwesomeIcon icon={icon} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
