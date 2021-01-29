import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ApiCall from './covidApi'

const IndexPage = () => (
  <Layout>
    <SEO title="Covid Tracker" />
    <h1>Welcome to the Site!</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <ApiCall />
    </div>
  </Layout>
)

export default IndexPage
