import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom':
import { act } from 'react-dom/test-utils':
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


act(() => {
    //render components
});
// make assertions


