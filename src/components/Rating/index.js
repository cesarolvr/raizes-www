import React from "react"

// Styles
import "./Rating.scss"

const Rating = () => {
  return (
    <section className="section rating-section">
      <div className="container">
        <div className="holder">
          <div className="title" data-aos="fade-up" data-aos-delay={100}>Rating</div>
          <p className="description" data-aos="fade-up" data-aos-delay={200}>
            O Fundo apresenta uma relação adequada entre os mecanismos de
            proteção e a perda estimada para a carteira. O risco é moderado.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Rating
