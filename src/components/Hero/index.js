import React from "react"
import classnames from "classnames"

// Styles
import "./Hero.scss"

const Hero = ({
  backgroundPath = "",
  backgroundColor = "",
  title,
  description,
  subtitle,
}) => {
  const backgroundContent = {
    background: backgroundColor ? backgroundColor : `url("${backgroundPath}")`,
  }
  return (
    <section
      className={classnames("hero", {
        "-solid-background": backgroundColor,
      })}
    >
      <div
        className="hero-background"
        style={{
          ...backgroundContent,
        }}
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
