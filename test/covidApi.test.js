import React from "react"
import { render, waitFor, act, screen } from "@testing-library/react"
import axios from "axios"
import ApiCall from "../src/components/covidApi"

jest.mock("axios")

const fakeData = {
  value: "NOT SURE WHAT THIS IS",
  state: "BS",
  date: "2020201",
  positive: "13",
  negative: "0",
  totalTestResults: "45",
  hostpitalizedCurrently: "0",
  inIcuCurrently: "0",
  lastUpdateEt: "2/1/2021 11:00",
  positiveIncrease: "10",
  negativeIncrease: "0",
  deathIncrease: "0",
  hospitalizedIncrease: "0",
}

beforeEach(() => {
  axios.get.mockImplementationOnce(() => Promise.resolve({ data: fakeData }))
})

it("renders covid statistics loading state", async () => {
  await waitFor(() => {
    const { asFragment } = render(<ApiCall />)
    expect(asFragment()).toMatchSnapshot()
  })
})

it("should render covid statistics", async () => {
  await waitFor(() => {
    render(<ApiCall />)
  })

  expect(
    screen.getByRole("cell", { name: /date\/time of last update/i }).textContent
  ).toEqual("Date/Time of Last Update")
  expect(
    screen.getByRole("cell", { name: /2\/1\/2021 11:00/i }).textContent
  ).toEqual(fakeData.lastUpdateEt)
})
