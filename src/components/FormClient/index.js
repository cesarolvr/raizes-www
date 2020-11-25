import { endpoints } from "gatsby-env-variables"
import React, { useState } from "react"
import { Formik } from "formik"

// Components
import Input from "../Forms/Input"
import Aside from "../Aside"

// Style
import "./FormClient.scss"

const FormContact = () => {
  const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = "Campo de nome obrigatório"
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
    <section className="product-page hire">
      <div className="container">
        <div className="holder">
          <Aside
            title="Faça uma proposta"
            subtitle="Cadastre-se"
            description="Seja nosso cliente e conte com a experiência de um FIDC com profissionais experientes e qualificados no mercado financeiro aliado a uma sólida estrutura tecnológica."
          />
        </div>
        <div className="holder">
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={(values, props) => {
              console.log("Enviou", values, props)
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
                <form className="form form-client" onSubmit={handleSubmit}>
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

export default FormContact
