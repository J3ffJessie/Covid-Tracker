import React, { useState } from "react"
import { Link } from "gatsby"
import axios from 'axios'

import Layout from "../components/layout"
import SEO from "../components/seo"


const defaultData = {
date: 20210126,
positive: 0,
negative: 0 ,
totalTestResults: 0,
hospitalizedCurrently:0,
inIcuCurrently: 0,
lastUpdateEt:0,
positiveIncrease:0,
negativeIncrease: 0,
total: 0,
totalTestResultIncrease: 0,
deathIncrease: 0,
hospitalizedIncrease: 0
}

export function ApiCall() {


  const [requestState, setRequestState] = useState('idle')

  const [data, setData] = useState({defaultData})

  // const [userState, setUserState] = useState('')

  React.useEffect( () => {

    setRequestState('pending')
    //api call
    axios.get('https://api.covidtracking.com/v1/states/in/current.json')
    .then((response) => {
      setRequestState('success')
      setData(response.data)
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
          </div>
        </div>

        {requestState === 'pending' && <h2>Loading......</h2>}

        {requestState === 'failure' && <h2>Sorry, the Data is not available at this time.</h2>}

        {requestState === 'success' && (() => {
          return(
        <div>
          <h1>{data.date}</h1>
          <p>{data.positive}</p>
          <p>{data.negative}</p>
          <p>{data.totalTestResults}</p>
          <p>{data.hospitalizedCurrently}</p>
          <p>{data.inIcuCurrently}</p>
          <p>{data.lastUpdateEt}</p>
          <p>{data.total}</p>
          <p>{data.totalTestResultIncrease}</p>
          <p>{data.positiveIncrease}</p>
          <p>{data.negativeIncrease}</p>
          <p>{data.deathIncrease}</p>
          <p>{data.hospitalizedIncrease}</p>
        </div>

      )
    })}
      </div>
    </div>
  )
}


export default ApiCall 

// const SecondPage = () => (
//   <Layout>
//     <SEO title="Page two" />
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export default SecondPage
