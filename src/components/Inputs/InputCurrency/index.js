import React from "react"
import classnames from "classnames"
import { Field } from "formik"
import MaskedInput from "react-text-mask"

// Styles
import "./InputCurrency.scss"

export default ({
  name,
  value,
  error,
  touched,
  label,
  mask,
  isRequired,
  handleChange = f => f,
  handleBlur = f => f,
}) => {
  return (
    <div className="field-wrapper">
      <div
        className={classnames("input-wrapper", {
          "-touched": touched[name],
          "-filled": value,
        })}
      >
        <Field
          name={name}
          
          render={({ field }) => (
            <MaskedInput
              {...field}
              mask={mask}
              required={isRequired}
              id={`input-${name}`}
              type="tel"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        />
        <label htmlFor={`input-${name}`}>{label}</label>
      </div>
      <div className="error-wrapper">
        {touched[name] && error ? <span className="error">{error}</span> : null}
      </div>
    </div>
  )
}
