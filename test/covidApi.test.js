import React from 'react';
import { act } from 'react-dom/test-utils';
import covidApi from '../src/components/covidApi';

let container = null
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting testing
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders covid statistics", async () => {
    const fakeData = {
        state: 'BS',
        date: '2020201',
        positive: '13',
        negative: '0',
        totalTestResults: '45',
        hostpitalizedCurrently: '0',
        inIcuCurrently: '0',
        lastUpdateEt: '2/1/2021 01:00',
        positiveIncrease: '10',
        negativeIncrease: '0',
        deathIncrease: '0',
        hospitalizedIncrease: '0'
    };
    jest.spyOn(global, "fetch").mockImplementation(() => 
    Promise.resolve({
        json: () => Promise.resolve(fakeData)
    }));

    expect(container.querySelector("p").textContent).toBe(fakeData.state);
    expect(container.querySelector("p").textContent).toBe(fakeData.date);
    expect(container.querySelector("p").textContent).toBe(fakeData.positive);
    expect(container.querySelector("p").textContent).toBe(fakeData.negative);
    expect(container.querySelector("p").textContent).toBe(fakeData.totalTestResults);
    expect(container.querySelector("p").textContent).toBe(fakeData.hostpitalizedCurrently);
    expect(container.querySelector("p").textContent).toBe(fakeData.inIcuCurrently);
    expect(container.querySelector("p").textContent).toBe(fakeData.lastUpdateEt);
    expect(container.querySelector("p").textContent).toBe(fakeData.positiveIncrease);
    expect(container.querySelector("p").textContent).toBe(fakeData.negativeIncrease);
    expect(container.querySelector("p").textContent).toBe(fakeData.deathIncrease);
    expect(container.querySelector("p").textContent).toBe(fakeData.hospitalizedIncrease);
    

    global.fetch.mockRestore();
});


