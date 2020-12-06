import React, { useEffect } from "react"
import AOS from "aos"

// Styles
import "aos/dist/aos.css"

// Styles
import "./Base.scss"
import "./Helpers.scss"
import "./Layout.scss"

const Layout = ({ children, className }) => {
  useEffect(() => {
    AOS.init({
      offset: 10,
      delay: 0,
      duration: 500,
      easing: "ease",
    })
  }, [])
  return <main className={className}>{children}</main>
}

export default Layout
