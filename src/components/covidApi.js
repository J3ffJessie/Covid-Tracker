import React, { useState } from "react"
import { Link } from "gatsby"
import axios from 'axios'

import Layout from "./layout"
import SEO from "./seo"



export function ApiCall() {


  const [requestState, setRequestState] = useState('idle')

  const [data, setData] = useState('')

  React.useEffect( () => {

    setRequestState('pending')
    //api call
    axios.get('https://api.covidtracking.com/v1/states/in/current.json')
    .then((response) => {
      setRequestState('success')
      const data = response.data;
      setData(data)
      console.log(data);
    })
    .catch((error) => {
      setRequestState('failure')
      console.error(error)
    })
  }, [])


  return(
    <div>
      <div className='data'>
        <div className="banner">
          <div className="container">
          <h1>Covid Data</h1>
          <p>Here are the stats for the State chosen: </p>
          <p>Date: {data.date}</p>
          <p>Positive Test: {data.positive}</p>
          <p>Negative Tests: {data.negative}</p>
          <p>Total Test Results: {data.totalTestResults}</p>
          <p># of Patients Hospitalized: {data.hospitalizedCurrently}</p>
          <p># of Patients in ICU Currently: {data.inIcuCurrently}</p>
          <p>Last Update: {data.lastUpdateEt}</p>
          <p>Increased Positive Tests from Last Update: {data.positiveIncrease}</p>
          <p>Increased Negative Tests from Last Update: {data.negativeIncrease}</p>
          <p># of Deaths since Last Update: {data.deathIncrease}</p>
          <p># of increased hospitilizations: {data.hospitalizedIncrease}</p>
          </div>
        </div>
        </div>
    </div>

      )
  }

export default ApiCall 
  