import React, { useState } from "react"
import { Formik } from "formik"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelopeOpen,
  faPhoneAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons"

// Components
import Input from "../Forms/Input"
import Textarea from "../Forms/Textarea"

// Style
import "./ContactForm.scss"

const ContactForm = () => {
  const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = "Campo de nome obrigatório"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email inválido"
    } else if (!values.phone) {
      errors.phone = "Campo de telefone obrigatório"
    }
    return errors
  }
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="holder">
          <div className="content">
            <p className="subtitle">Contato</p>
            <h1 className="title">Fale Conosco</h1>
            <hr className="divider" />
            <p className="description">
              Seja nosso cliente e conte com a experiência de um FIDC com
              profissionais experientes e qualificados no mercado financeiro
              aliado a uma sólida estrutura tecnológica.
            </p>
            <ul className="contact-list">
              <li className="item">
                <a href="mailto: contato@fundoraizes.com.br">
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                  contato@fundoraizes.com.br
                </a>
              </li>
              <li className="item">
                <a href="tel: (11)98293-89223">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  (11)98293-89223
                </a>
              </li>
              <li className="item">
                <a href="tel: (11)98293-89223">
                  <FontAwesomeIcon icon={faMobileAlt} />
                  (11)98293-89223
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="holder">
          <Formik
            
            initialValues={initialValues}
            validate={validate}
            onSubmit={(values, props) => {
              console.log(values, props)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => {
              console.log(errors)
              return (
                <form className="form" onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    name="name"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    value={values.name}
                    error={errors.name}
                    label="Nome"
                    isRequired={true}
                  />
                  <Input
                    type="email"
                    name="email"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.email}
                    touched={touched}
                    error={errors.email}
                    label="Email"
                    isRequired={true}
                  />
                  <Input
                    type="tel"
                    name="phone"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.number}
                    touched={touched}
                    error={errors.phone}
                    label="Celular"
                    isRequired={true}
                  />
                  <Textarea
                    type="text"
                    name="message"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.message}
                    touched={touched}
                    error={errors.message}
                    label="Sua dúvida"
                  />
                  <button
                    className="button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Avançar
                  </button>
                </form>
              )
            }}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
