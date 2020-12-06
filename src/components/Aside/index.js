import React from "react"

// Style
import "./Aside.scss"

const Aside = ({ title = "", subtitle = "", description = "" }) => {
  return (
    <section className="aside">
      <p className="subtitle" data-aos="fade-up"
              data-aos-delay={100}>{subtitle}</p>
      <h1 className="title" data-aos="fade-up"
              data-aos-delay={200}>{title}</h1>
      <hr className="divider" />
      <p className="description" data-aos="fade-up"
              data-aos-delay={300}>{description}</p>
    </section>
  )
}

export default Aside
