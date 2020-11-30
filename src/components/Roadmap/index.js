import React from "react"

// Styles
import "./Roadmap.scss"

function createMarkup(content) {
  return {__html: content};
}

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
                <div
                  className="description"
                  dangerouslySetInnerHTML={createMarkup(description)}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
