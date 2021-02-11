import React, { useEffect, useState } from "react"
import axios from "axios"

import Layout from "./layout"
import SEO from "./seo"

export default function GetNational() {
  const [usData, setUsData] = useState("")

  async function fetchUsData() {
    const response = await axios.get(
      `https://api.covidtracking.com/v1/us/current.json`
    )
    setUsData(await response.data)
  }

  useEffect(() => {
    fetchUsData()
  }, [])

  if (!usData) {
    return "loading...."
  } else {
    return (
      <div>
      <div>
        <table className='national-table'>
          <tr>
            <th>National Stats</th>
          </tr>
          <tr>
            <td>{usData[0].date}</td>
          </tr>
          <tr>
            <td>{usData[0].positive}</td>
          </tr>
          <tr>
            <td>{usData[0].negative}</td>
          </tr>
          <tr>
            <td>{usData[0].totalTestResults}</td>
          </tr>
          <tr>
            <td>{usData[0].hospitalizedCurrently}</td>
          </tr>
          <tr>
            <td>{usData[0].inIcuCurrently}</td>
          </tr>
          <tr>
              <td>{usData[0].positiveIncrease}</td>
          </tr>
          <tr>
              <td>{usData[0].negativeIncrease}</td>
          </tr>
          <tr>
              <td>{usData[0].deathIncrease}</td>
          </tr>
          <tr>
              <td>{usData[0].hospitalizedIncrease}</td>
          </tr>
        </table>
      </div>
      </div>
    )
  }
}
