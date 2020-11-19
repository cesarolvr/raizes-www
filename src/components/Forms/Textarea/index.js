import React from "react"

// Styles
import "./Textarea.scss"

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
    <>
      <textarea
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        rows="5" cols="35"
      ></textarea>
      <span className="error">{error && touched && error}</span>
    </>
  )
}
