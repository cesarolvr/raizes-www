import React from "react"

// Styles
import "./Numbers.scss"

const Numbers = () => {
  return (
    <section className="section numbers-section">
      <div className="container">
        <div className="holder">
          <div className="title">
            O Fundo Raízes <br /> em números
          </div>
          <hr className="divider" />
        </div>
        <ol className="numbers-list">
          <li className="item">
            <p className="value">6</p>
            <p className="subtitle">Anos de mercado</p>
          </li>
          <li className="item">
            <p className="value">300</p>
            <p className="subtitle">Clientes ativos</p>
          </li>
          <li className="item">
            <p className="value">
              800<small>MM</small>
            </p>
            <p className="subtitle">em aprovações de crédito</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Numbers
