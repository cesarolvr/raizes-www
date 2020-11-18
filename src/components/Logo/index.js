import { Link } from "gatsby"
import React from "react"

// Assets
import logo from "../../images/logo.svg"

// Styles
import './Logo.scss'

const Logo = () => (
  <Link to="/" className="logo-wrapper">
    <img src={logo} className="logo" />
  </Link>
)

export default Logo
