import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ApiCall from './covidApi'
import PickState from "../components/dropdown"

const IndexPage = () => (
  <Layout>
    <SEO title="Covid Tracker" />
    <h1>Welcome to the Covid Stat Tracker</h1>
    <div className='main-area' style={{ maxWidth: `100vw`, marginBottom: `1.45rem` }}>
      <PickState 
      />
      {/* <ApiCall /> render only if the user has selected a state from the dropdown menu otherwise render the main page with dropdown selection and submit button */}
    </div>
  </Layout>
)

export default IndexPage
