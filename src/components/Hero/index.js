import React from "react"

// Styles
import "./Hero.scss"

const Hero = ({ backgroundPath = "" }) => {
  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url("${backgroundPath}")` }}
      ></div>
      <div className="container">
        <div className="hero-content">
          <p className="subtitle">Fundo Raízes</p>
          <h1 className="title">Experiência, Tecnologia, Inteligência</h1>
          <hr className="divider" />
          <p className="description">
            Invista em um fundo sólido com rentabilidade acima da média do
            mercado
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
