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
  return (
    <>
      {() => {
        if (!(window && document)) return
        return (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-P248NMQ"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript>
        )
      }}
      <main className={className}>{children}</main>
    </>
  )
}

export default Layout
