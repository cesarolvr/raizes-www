import React from "react"

// Style
import "./Aside.scss"

const Aside = ({ title = "", subtitle = "", description = "" }) => {
  return (
    <section className="aside">
      <p className="subtitle">{subtitle}</p>
      <h1 className="title">{title}</h1>
      <hr className="divider" />
      <p className="description">{description}</p>
    </section>
  )
}

export default Aside
