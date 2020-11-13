/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

// Styles
import "./Base.scss"
import "./Helpers.scss"
import "./Layout.scss"

const Layout = ({ children, className }) => {
  return <main className={className}>{children}</main>
}

export default Layout
