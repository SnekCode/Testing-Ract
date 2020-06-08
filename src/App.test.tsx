import React from 'react';
import { configure ,render, prettyDOM } from '@testing-library/react';
// import selectEvent from 'react-select-event';
import App from './App';

const selectEvent = require("react-select-event");

configure({testIdAttribute: 'id'})

// Test using react-select-event to figure out how to test the react-select component
test('Select tester', async () => {
  const {getByTestId, queryByText, getByRole} = render(<App />);

  // Find and save the select component as a varible
  const selectComp = getByTestId('select');

  // We expect that the select component is in the document
  expect(selectComp).toBeInTheDocument()
  // We expect it to have a default value
  expect(selectComp).toHaveTextContent("Testing1")

  // And we can expect that 'Testing2' is not in the document important for the next expect statement
  expect(queryByText('Testing2')).not.toBeInTheDocument()

  // open the menu
  selectEvent.openMenu(selectComp);
  // And we can expect that 'Testing2' is in that menu
  expect(queryByText('Testing2')).toBeInTheDocument()

  // This line should select the value we want
  // It is clear from this testing file that this is either not implemented correctly I'm using the latest version on NPM
  await selectEvent.select(selectComp,"Testing2");

  // for pretty console logs
  console.log(prettyDOM());

  //This line should pass with an expected text content of "Testing2"
  expect(selectComp).toHaveTextContent("Testing2")

  // This should pass with an expected value of 2 which is the id of the label we selected
  expect(getByRole("form")).toHaveFormValues({test: "Testing2"});

});

