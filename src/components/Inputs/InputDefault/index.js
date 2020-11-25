import React from "react"
import classnames from "classnames"

// Styles
import "./Input.scss"

export default ({
  type,
  name,
  value,
  error,
  touched,
  label,
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
        <input
          type={type}
          id={`input-${name}`}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          required={isRequired}
        />
        <label htmlFor={`input-${name}`}>{label}</label>
      </div>
      <div className="error-wrapper">
        {touched[name] && error ? <span className="error">{error}</span> : null}
      </div>
    </div>
  )
}
