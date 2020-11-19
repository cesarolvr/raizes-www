import React from "react"

// Styles
import "./Input.scss"

export default ({
  type,
  name,
  value,
  error,
  touched,
  handleChange = f => f,
  handleBlur = f => f,
}) => {
  console.log(error)
  return (
    <div className="input-wrapper">
      <input
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {touched && error ? <span className="error">{error}</span> : null}
    </div>
  )
}
