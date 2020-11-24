import React from "react"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import FormClient from "../components/FormClient"
import SEO from "../components/Seo"

// Styles
import "../styles/pages/Contratar.scss"

export default () => {
  return (
    <Layout className="contratar">
      <SEO title="Contratar" />
      <Header className="-shrunken" />
      <FormClient />
    </Layout>
  )
}
