import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeOpen, faPhoneAlt, faMobileAlt} from "@fortawesome/free-solid-svg-icons"

// Styles
import "./Contact.scss"

const Contact = () => {
  return (
    <section className="section contact-section">
      <div className="box">
        <h2 className="title">Ficou com alguma dúvida?</h2>
        <hr className="divider" />
        <p className="paragraph">Fale com o Raízes</p>
        <ul className="contact-list">
          <li className="item">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            contato@fundoraizes.com.br
          </li>
          <li className="item">
            <FontAwesomeIcon icon={faPhoneAlt} />
            (11)98293-89223
          </li>
          <li className="item">
            <FontAwesomeIcon icon={faMobileAlt} />
            (11)98293-89223
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
