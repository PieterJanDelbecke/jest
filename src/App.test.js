import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from './App.js'



// FUNCTIONAL TESTING

test("button has correct initial color", () => {
  render(<App />);
  // assign the button to the colorButton variable
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });

  // check if the background colour of the button is red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  // check if the background colour of the button is blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // check if the text of the button is 'Change to red'
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables on first click and enables on second click", () => {
  render(<App />);

  // check that the button is disabled
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to Midnight Blue" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("check if button turns grey when disabled and back to red or blue when enabled", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to Midnight Blue" });

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: 'grey'})

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: 'MediumVioletRed'})

  fireEvent.click(button)
  expect(button).toHaveStyle({backgroundColor: 'MidnightBlue'})

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: 'grey'})

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: 'MidnightBlue'})
});

// UNIT TESTING => test one particular function

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe("Red")
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })

})