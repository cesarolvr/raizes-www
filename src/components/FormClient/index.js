import React, { useState } from "react"
import { Formik } from "formik"
import classnames from "classnames"
import { navigate } from 'gatsby'


// Components
import Aside from "../Aside"
import Steps from "./Steps"

// Style
import "./FormClient.scss"

// Utils
import { statusDictionary } from "../../mock"

const FormContact = () => {
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState("")

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
              email: "",
              cnpj: "",
              companyName: "",
              phone: "",
            }}
            validate={values => {
              const errors = {}
              if (step === 1) {
                if (!values.quantity) {
                  errors.quantity = "Valor obrigatório"
                }
              } else if (step === 2) {
                if (!values.name) {
                  errors.name = "Campo de nome obrigatório"
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Email inválido"
                } else if (!values.cnpj) {
                  errors.cnpj = "CNPJ inválido"
                } else if (!values.companyName) {
                  errors.companyName = "Razão Social obrigatório"
                } else if (!values.phone) {
                  errors.phone = "Telefone obrigatório"
                }
              }
              return errors
            }}
            onSubmit={(values, props) => {
              setStatus("pending")
              console.log("Enviou", values, props)
              navigate('/sucesso/cliente');
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
              return (
                <form className="form form-client" onSubmit={handleSubmit}>
                  {Steps[step]({ setType, nextStep, ...props })}
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

export default FormContact
