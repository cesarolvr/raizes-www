import React from "react"
import classnames from "classnames"

// Styles
import "./Textarea.scss"

export default ({
  type,
  name,
  value,
  error,
  label,
  touched,
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
        <label htmlFor={`input-${name}`}>{label}</label>
        <textarea
          type={type}
          name={name}
          id={`input-${name}`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          required={isRequired}
          rows="15"
          cols="25"
        ></textarea>
      </div>
      <div className="error-wrapper">
        {touched && error ? <span className="error">{error}</span> : null}
      </div>
    </div>
  )
}
