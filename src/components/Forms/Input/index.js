import React from "react"
import classnames from "classnames"
import { Field } from "formik"
import MaskedInput from "react-text-mask";

// Styles
import "./Input.scss"

export default ({
  type,
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
        {type === "currency" ? (
          <Field
            name={name}
            render={({ field }) => (
              <MaskedInput
                {...field}
                mask={mask}
                id={`input-${name}`}
                type="tel"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="R$ 10.000,00"
              />
            )}
          />
        ) : (
          <input
            type={type}
            id={`input-${name}`}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            required={isRequired}
          />
        )}
        <label htmlFor={`input-${name}`}>{label}</label>
      </div>
      <div className="error-wrapper">
        {touched[name] && error ? <span className="error">{error}</span> : null}
      </div>
    </div>
  )
}
