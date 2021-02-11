import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import axios from "axios"
import states from "../utils/states"

import Layout from "./layout"
import SEO from "./seo"

export default function ApiCall() {
  const [requestState, setRequestState] = useState("idle")

  const [data, setData] = useState("")

  const [state, setState] = useState("al")

  const onStateSelect = e => {
    e.preventDefault()
    setState(e.target.value)
  }

  async function fetchCovidData(value) {
    const response = await axios.get(
      `https://api.covidtracking.com/v1/states/${value}/current.json`
    )
    setData(await response.data)
  }

  useEffect(() => {
    fetchCovidData(state)
  }, [state])

    return (
      <div>
        <div className="data">
          <div className="banner">
            <div className="drop-down">
              <select
                name="state"
                id="stateSelect"
                onChange={e => onStateSelect(e)}
              >
                {states.map(s => (
                  <option value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <h1>Covid Data</h1>
        <details open>
          <summary>Show Statistics</summary>
          <div className="container">
            
            <table>
              <tr>
                <th className='table-title'>Category</th>
                <th className='table-title'>{data.state}'s Statistics </th>
              </tr>
              <tr>
                <td>Date</td>
                <td>{data.date}</td>
              </tr>
              <tr>
                <td>Positive Results</td>
                <td>{data.positive}</td>
              </tr>
              <tr>
                <td>Negative Results</td>
                <td>{data.negative}</td>
              </tr>
              <tr>
                <td>Total Test Results</td>
                <td>{data.totalTestResults}</td>
              </tr>
              <tr>
                <td># of Patients Currently Hospitalized</td>
                <td>{data.hospitalizedCurrently}</td>
              </tr>
              <tr>
                <td># of Patients in ICU Currently</td>
                <td>{data.inIcuCurrently}</td>
              </tr>
              <tr>
                <td>Increase in Positive Results from Last Update</td>
                <td>{data.positiveIncrease}</td>
              </tr>
              <tr>
                <td>Increase in Negative Results from Last Update</td>
                <td>{data.negativeIncrease}</td>
              </tr>
              <tr>
                <td># of Deaths since Last Update</td>
                <td>{data.deathIncrease}</td>
              </tr>
              <tr>
                <td># of Increased Hospitalizations</td>
                <td>{data.hospitalizedIncrease}</td>
              </tr>
            </table>
            
          </div>
        </details>
        {/* <details className="chart-container">
          <summary>Show Charts</summary>
          <div className="charts"></div>
          <h1>Coming Soon!</h1>
        </details> */}
      </div>
    )
  }
