import React from "react"

// Components
import Input from "../../Inputs/InputDefault"
import InputMasked from "../../Inputs/InputMasked"

const CompanyInformation = ({
  handleChange,
  touched,
  values,
  handleBlur,
  errors,
  isSubmitting,
  flow,
  ...props
}) => {
  const isPfFlow = flow === "pf"
  const documentValue = values[values.cnpj ? "cnpj" : "cpf"]
  return (
    <div className="step">
      <h2 className="title">Por fim, algumas informações sobre sua empresa</h2>
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
        touched={touched}
        value={values.email}
        error={errors.email}
        label="Email"
        isRequired={true}
      />
      {isPfFlow ? (
        <InputMasked
          type="text"
          name="cpf"
          mask={[
            /\d/,
            /\d/,
            /\d/,
            ".",
            /\d/,
            /\d/,
            /\d/,
            ".",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
          ]}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          value={values.cpf}
          error={errors.cpf}
          label="CPF"
        />
      ) : (
        <InputMasked
          type="text"
          name="cnpj"
          mask={[
            /\d/,
            /\d/,
            ".",
            /\d/,
            /\d/,
            /\d/,
            ".",
            /\d/,
            /\d/,
            /\d/,
            "/",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
          ]}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          value={values.cnpj}
          error={errors.cnpj}
          label="CNPJ"
        />
      )}
      {!isPfFlow ? (
        <Input
          type="text"
          name="companyName"
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          value={values.companyName}
          error={errors.companyName}
          label="Razão Social"
        />
      ) : null}

      <Input
        type="tel"
        name="phone"
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched}
        value={values.phone}
        error={errors.phone}
        label="Telefone"
        isRequired={true}
      />

      <button
        className="button"
        type="submit"
        disabled={
          isSubmitting ||
          !values.name ||
          !values.email ||
          !documentValue ||
          !values.phone
        }
      >
        Avançar
      </button>
    </div>
  )
}

export default CompanyInformation
