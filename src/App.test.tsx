import React from 'react';
import { configure ,render, prettyDOM } from '@testing-library/react';
// import selectEvent from 'react-select-event';
import App from './App';

const selectEvent = require("react-select-event");

configure({testIdAttribute: 'id'})

// Test using react-select-event to figure out how to test the react-select component
test('Select tester', async () => {
  const {getByTestId, queryByText, getByRole} = render(<App />);

  const selectComp = getByTestId('select');

  expect(selectComp).toBeInTheDocument()
  expect(selectComp).toHaveTextContent("Testing1")

  selectEvent.openMenu(selectComp);
  expect(queryByText('Testing2')).toBeInTheDocument()
  await selectEvent.select(selectComp,/Testing2/);
  console.log(prettyDOM());

  expect(getByRole("form")).toHaveFormValues({test: "Testing2"});

});

