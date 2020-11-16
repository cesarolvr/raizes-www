import React from "react"

// Styles
import "./Quotas.scss"

const Quotas = () => {
  return (
    <section className="section quotas-section">
      <div className="container">
        <ol className="quote-list">
          <li className="item">
            <p className="name">Cota sênior</p>
            <h5 className="price">R$ 25.000</h5>
          </li>
          <li className="item">
            <p className="name">Cota mezanino</p>
            <h5 className="price">R$ 300.000</h5>
          </li>
        </ol>
          <button className="button">Quero investir</button>
      </div>
    </section>
  )
}

export default Quotas
