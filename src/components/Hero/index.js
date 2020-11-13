import React from "react"

// Styles
import "./Hero.scss"

const Hero = ({ backgroundPath = "", title, description, subtitle }) => {
  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url("${backgroundPath}")` }}
      ></div>
      <div className="container">
        <div className="hero-content">
          <p className="subtitle">{subtitle}</p>
          <h1 className="title">{title}</h1>
          <hr className="divider" />
          <p className="description">{description}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
