import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

// Styles
import "./Related.scss"

const Related = ({ title = "Conheça também", list = [], id, description }) => {
  return (
    <section className="section related-section" id={id}>
      <div className="container">
        <h2 className="title" data-aos="fade-up" data-aos-delay="150">{title}</h2>

        <hr className="divider" />
        <p className="description" data-aos="fade-up" data-aos-delay="250">{description}</p>
        <ul className="related-list">
          {list.map(({ image, title, description, link }, index) => {
            return (
              <li className="item" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <img className="item-thumb" src={image} alt={`Outro produto que o Fundo Raízes oferece: ${title}`} />
                <p className="item-title">{title}</p>
                <p className="item-description">{description}</p>
                <a className="item-link" href={link}>
                  Saiba mais <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Related
