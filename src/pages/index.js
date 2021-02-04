import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ApiCall from '../components/covidApi'
// import PickState from "../components/dropdown"

const IndexPage = () => (
  <Layout>
    <SEO title="Covid Tracker" />
    <h1>Welcome to the Covid Stat Tracker</h1>
    <div className='main-area' style={{ maxWidth: `100vw`, marginBottom: `1.45rem` }}>
      {/* <PickState /> */}
      <ApiCall />
    </div>
  </Layout>
)

export default IndexPage
