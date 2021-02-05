import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import axios from 'axios'

import Layout from "./layout"
import SEO from "./seo"


export default function ApiCall() {
  const [requestState, setRequestState] = useState('idle')

  const [data, setData] = useState('')

  async function fetchCovidData(value) {

  }

  useEffect(() => {
    let mounted = true

    if(mounted) {
      fetchCovidData(data.value);
    }

    return () => mounted = false 
  }, []);

  if (!data) {
    return "loading....";
  }else {
    return (
      <div>
        <div className='data'>
          <div className="banner">
            <div className="container">
            <h1>Covid Data</h1>
            <h2>Here are the stats for the State chosen: {data.state} </h2>
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

  }

  
