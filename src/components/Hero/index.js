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
  backgroundVideo,
}) => {
  const backgroundContent = {
    background: backgroundColor ? backgroundColor : `url("${backgroundPath}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no repeat",
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
      >
        {backgroundVideo && (
          <video autoPlay muted loop className="hero-video">
            <source
              src="https://firebasestorage.googleapis.com/v0/b/raizes-b6208.appspot.com/o/hero-video.mp4?alt=media&token=c8b97976-6e5d-44bb-b380-45ac207d764f"
              type="video/mp4"
            />
          </video>
        )}
      </div>
      <div className="container">
        <div className="hero-content">
          <p className="subtitle" data-aos="fade-up" data-aos-delay={50}>{subtitle}</p>
          <h1 className="title" data-aos="fade-up" data-aos-delay={100}>{title}</h1>
          <hr className="divider" data-aos="fade-up" data-aos-delay={150} />
          <p className="description" data-aos="fade-up" data-aos-delay={250}>{description}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
