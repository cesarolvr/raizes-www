import React from "react"

// Components
import Input from "../../Forms/Input"

const CompanyInformation = ({
  handleChange,
  touched,
  values,
  handleBlur,
  errors,
  nextStep,
  isSubmitting,
}) => {
  return (
    <div className="step">
      <h2 className="title">Por fim, algumas informações sobre sua empresa</h2>
      {[
        {
          label: "Nome",
          name: "name",
          type: "text",
        },
        {
          label: "Email",
          name: "email",
          type: "text",
        },
        {
          label: "CNPJ",
          name: "cnpj",
          type: "text",
        },
        {
          label: "Razão Social",
          name: "companyName",
          type: "text",
        },
        {
          label: "Telefone",
          name: "phone",
          type: "tel",
        },
      ].map(({ name, type, label }, index) => {
        return (
          <Input
            key={index}
            type={type}
            name={name}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            value={values[name]}
            error={errors[name]}
            label={label}
            isRequired={true}
          />
        )
      })}

      <button
        className="button"
        type="button"
        onClick={() => nextStep()}
        disabled={
          isSubmitting ||
          !values.name ||
          !values.email ||
          !values.cnpj ||
          !values.companyName ||
          !values.phone
        }
      >
        Avançar
      </button>
    </div>
  )
}

export default CompanyInformation
