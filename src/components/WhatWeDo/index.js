import React from "react"

// Styles
import "./WhatWeDo.scss"

const WhatWeDo = () => {
  return (
    <section className="section whatwedo-section">
      <div className="container">
        <div className="title" data-aos="fade-up" data-aos-delay={50}>Princípios</div>
        <hr className="divider" />
        <p className="description" data-aos="fade-up" data-aos-delay={150}>
          É o que nos norteia para sermos uma empresa de referencia com
          responsabilidade, transparência e resultados para nossos clientes e
          investidores.
        </p>
      </div>
    </section>
  )
}

export default WhatWeDo
