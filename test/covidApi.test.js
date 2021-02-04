import React from "react"
import { render, act, waitFor } from "@testing-library/react"
import axios from "axios"
import ApiCall from "../src/components/covidApi"
import renderer from "react-test-renderer"

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
  lastUpdateEt: "2/1/2021 01:00",
  positiveIncrease: "10",
  negativeIncrease: "0",
  deathIncrease: "0",
  hospitalizedIncrease: "0",
}

it("renders covid statistics loading state", async () => {
  const { asFragment } = render(<ApiCall />)
  expect(asFragment()).toMatchSnapshot()
})

it("should render covid statistics", async () => {
  axios.get.mockImplementationOnce(() => Promise.resolve(fakeData))

  // had to do this because of scope
  let container
  await waitFor(() => {
    const utils = render(<ApiCall />)
    container = utils.container
  })
  expect(container.querySelectorAll("p")[0].textContent).toBe(
    `Here are the stats for the State chosen: ${fakeData.state} `
  )
  expect(container.querySelectorAll("p")[1].textContent).toBe(
    `Date: ${fakeData.date}`
  )
  // expect(container.querySelector("p").textContent).toBe(fakeData.positive)
  // expect(container.querySelector("p").textContent).toBe(fakeData.negative)
  // expect(container.querySelector("p").textContent).toBe(
  //   fakeData.totalTestResults
  // )
  // expect(container.querySelector("p").textContent).toBe(
  //   fakeData.hostpitalizedCurrently
  // )
  // expect(container.querySelector("p").textContent).toBe(fakeData.inIcuCurrently)
  // expect(container.querySelector("p").textContent).toBe(fakeData.lastUpdateEt)
  // expect(container.querySelector("p").textContent).toBe(
  //   fakeData.positiveIncrease
  // )
  // expect(container.querySelector("p").textContent).toBe(
  //   fakeData.negativeIncrease
  // )
  // expect(container.querySelector("p").textContent).toBe(fakeData.deathIncrease)
  // expect(container.querySelector("p").textContent).toBe(
  //   fakeData.hospitalizedIncrease
  // )
})
