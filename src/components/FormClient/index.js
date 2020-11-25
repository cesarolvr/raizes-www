import React, { useState } from "react"
import { Formik } from "formik"

// Components
import Aside from "../Aside"
import Steps from "./Steps"


// Style
import "./FormClient.scss"

const FormContact = () => {
  const [step, setStep] = useState(0)

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
            initialValues={{
              type: "",
              quantity: "",
              name: "",
              companyEmail: "",
              cnpj: "",
              companyName: "",
              phone: "",
            }}
            validate={(values) => {
              const errors = {}
              if(!values.quantity) {
                errors.quantity = "Valor obrigatório"
              }
              return errors
            }}
            onSubmit={(values, props) => {
              console.log("Enviou", values, props)
            }}
          >
            {({ handleSubmit, setFieldValue, ...props }) => {
              const setType = (type, value) => {
                setFieldValue(type, value, false)
                setStep(step + 1)
              }

              const nextStep = () => {
                setStep(step + 1)
              }
              
              console.log(props)
              return (
                <form className="form form-client" onSubmit={handleSubmit}>
                  {Steps[step]({ setType, nextStep, ...props })}
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
