import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import axios from "axios"
import states from "../utils/states"
import NumberFormat from "react-number-format"

import Layout from "./layout"
import SEO from "./seo"

export default function ApiCall() {
  const firstUpdate = useRef(false)
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
    setData(response.data)
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
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
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
            <thead>
              <tr>
                <th className="table-title">Category</th>
                <th className="table-title">{data.state}'s Statistics </th>
              </tr>
            </thead>
            <tbody>
              {data && data.lastUpdateEt ? (
                <tr>
                  <td>Date/Time of Last Update</td>
                  <td>{data.lastUpdateEt}</td>
                </tr>
              ) : null}
              {data && data.positive ? (
                <tr>
                  <td>Positive Results</td>
                  <td>
                    <NumberFormat
                      value={data.positive}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                </tr>
              ) : null}
              {data && data.negative ? (
                <tr>
                  <td>Negative Results</td>
                  <td>
                    <NumberFormat
                      value={data.negative}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                </tr>
              ) : null}
              {data && data.totalTestResults ? (
                <tr>
                  <td>Total Test Results</td>
                  <td>
                    <NumberFormat
                      value={data.totalTestResults}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                </tr>
              ) : null}
              {data && data.hospitalizedCurrently ? (
                <tr>
                  <td># of Patients Currently Hospitalized</td>
                  <td>
                    <NumberFormat
                      value={data.hospitalizedCurrently}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                </tr>
              ) : null}
              {data && data.inIcuCurrently ? (
                <tr>
                  <td># of Patients in ICU Currently</td>
                  <td>
                    <NumberFormat
                      value={data.inIcuCurrently}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                </tr>
              ) : null}
              {data && data.positiveIncrease ? (
                <tr>
                  <td>Increase in Positive Results from Last Update</td>
                  <td>
                    <NumberFormat
                      value={data.positiveIncrease}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                </tr>
              ) : null}
              {data && data.negativeIncrease ? (
                <tr>
                  <td>Increase in Negative Results from Last Update</td>
                  <td>
                    <NumberFormat
                      value={data.negativeIncrease}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                </tr>
              ) : null}
              {data && data.deathIncrease ? (
                <tr>
                  <td># of Deaths since Last Update</td>
                  <td>
                    <NumberFormat
                      value={data.deathIncrease}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                </tr>
              ) : null}
              {data && data.hospitalizedIncrease ? (
                <tr>
                  <td># of Increased Hospitalizations</td>
                  <td>
                    <NumberFormat
                      value={data.hospitalizedIncrease}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </details>
      {/* <details className="chart-container">
          <summary>Show Charts</summary>
          <div className="charts"></div>
        </details> */}
    </div>
  )
}
