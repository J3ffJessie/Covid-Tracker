import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ApiCall from './covidApi'
import PickState from "../components/dropdown"

const IndexPage = () => (
  <Layout>
    <SEO title="Covid Tracker" />
    <h1>Welcome to the Site!</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <PickState />
      {/* <ApiCall /> render only if the user has selected a state from the dropdown menu otherwise render the main page with dropdown selection and submit button */}
    </div>
  </Layout>
)

export default IndexPage
