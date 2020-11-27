import React from "react"

// Components
import Layout from "../components/Layout"
import Header from "../components/Header"
import FormInvestor from "../components/FormInvestor"
import SEO from "../components/Seo"

// Styles
import "../styles/pages/Investir.scss"

export default () => {
  return (
    <Layout className="investir">
      <SEO title="Investir" />
      <Header className="-shrunken" />
      <FormInvestor />
    </Layout>
  )
}
