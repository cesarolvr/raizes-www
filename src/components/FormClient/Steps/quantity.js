import React from "react"
import createNumberMask from "text-mask-addons/dist/createNumberMask"

// Components
import Input from "../../Inputs/InputCurrency"

const defaultMaskOptions = {
  prefix: "R$",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ".",
  allowDecimal: true,
  decimalSymbol: ",",
  decimalLimit: 2,
  integerLimit: 15,
  allowNegative: false,
  allowLeadingZeroes: false,
}

const Quantity = ({
  handleChange,
  handleBlur,
  touched,
  values,
  errors,
  isSubmitting,
  nextStep,
}) => {
  const currencyMask = createNumberMask(defaultMaskOptions)
  return (
    <div className="step">
      <h2 className="title">De quanto você precisa?</h2>
      <Input
        type="text"
        mask={currencyMask}
        name="quantity"
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched}
        value={values.quantity}
        error={errors.quantity}
        label="Valor"
        isRequired={true}
      />
      <button
        className="button"
        type="button"
        onClick={() => nextStep()}
        disabled={isSubmitting || !values.quantity}
      >
        Avançar
      </button>
    </div>
  )
}

export default Quantity
