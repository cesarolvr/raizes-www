import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

// Styles
import "./Related.scss"

// Assets
import image1 from "../../images/thumb-compra-de-recebiveis.jpg"
import image2 from "../../images/thumb-capital-de-giro.jpg"
import image3 from "../../images/thumb-antecipacao-de-contratos.jpg"

const Related = ({
  title = "Conheça também",
  list = [
    {
      image: image1,
      title: "Compra de recebíveis",
      description: "Modalidade de crédito perfeita para produtores rurais",
      link: "",
    },
    {
      image: image2,
      title: "Capital de Giro",
      description: "Modalidade de crédito perfeita para produtores rurais",
      link: "",
    },
    {
      image: image3,
      title: "Antecipação de contratos",
      description: "Modalidade de crédito perfeita para produtores rurais",
      link: "",
    },
  ],
}) => {
  return (
    <section className="section related-section">
      <div className="container">
        <h2 className="title">{title}</h2>

        <hr className="divider" />
        <ul className="related-list">
          {list.map(({ image, title, description, link }, index) => {
            return (
              <li className="item" key={index}>
                <img className="item-thumb" src={image}></img>
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
