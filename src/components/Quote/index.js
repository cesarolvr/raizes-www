import React from "react"

// Styles
import "./Quote.scss"

// Assets
import backgroundQuote from "../../images/background-quote.jpg"

const Quote = () => {
  return (
    <section
      className="section quote-section"
      style={{ backgroundImage: `url(${backgroundQuote})` }}
    >
      <div className="container">
        <p className="phrase" data-aos="fade-up" data-aos-delay={50}>
          “The right question is overwhelmingly more important than the right
          answer to the wrong question.”
        </p>
        <p className="author" data-aos="fade-up" data-aos-delay={150}>Alvin Toffler</p>
      </div>
    </section>
  )
}

export default Quote
