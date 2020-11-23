import React, { useState } from "react"
import { Formik } from "formik"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classnames from "classnames"
import {
  faTimes,
  faCheck,
  faSpinner,
  faEnvelopeOpen,
  faPhoneAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons"

// Components
import Input from "../Forms/Input"
import Textarea from "../Forms/Textarea"

// Mock
import { endpoints } from "../../mock"

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

  const statusDictionary = {
    success: () => (
      <>
        Enviado com sucesso
        <FontAwesomeIcon icon={faCheck} />
      </>
    ),
    pending: () => (
      <>
        Carregando...
        <FontAwesomeIcon icon={faSpinner} />
      </>
    ),
    error: () => (
      <>
        Falha ao enviar o formulário
        <FontAwesomeIcon icon={faTimes} />
      </>
    ),
  }

  const [isLoading, setIsloading] = useState(false)
  const [status, setStatus] = useState("")

  return (
    <section
      className={classnames("contact-form-section", {
        "-loading": isLoading,
      })}
    >
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
            onSubmit={(values, { resetForm }) => {
              setIsloading(true)
              setStatus("pending")
              var myHeaders = new Headers()
              myHeaders.append("Content-Type", "application/json")
              var raw = JSON.stringify({ data: values })
              fetch(endpoints.contactForm.dev, {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
              })
                .then(({ status }) => {
                  if (status === 200) {
                    setStatus("success")
                    resetForm({})
                  } else {
                    setStatus("error")
                  }
                })
                .catch(err => {
                  console.log(err)
                  setStatus("error")
                })
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
                    value={values.phone}
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
          {status && (
            <div
              className={classnames("form-state", {
                [`-${status}`]: status,
              })}
            >
              {statusDictionary[status]()}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
