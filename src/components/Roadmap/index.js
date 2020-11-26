import React from "react"

// Styles
import "./Roadmap.scss"

export default ({ steps = [] }) => {
  return (
    <section className="roadmap-section">
      <div className="container">
        <ul className="roadmap-list">
          {steps.map(({ number, title, description }, index) => {
            return (
              <li className="item" key={index}>
                <span className="number">{number}</span>
                <h4 className="title">{title}</h4>
                <p className="description">{description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
