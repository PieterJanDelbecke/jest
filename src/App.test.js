import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  // assign the button to the colorButton variable
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // check if the background colour of the button is red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // check if the background colour of the button is blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // check if the text of the button is 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables on first click and enables on second click", () => {
  render(<App />);

  // check that the button is disabled
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("check if button turns grey when disabled and back to red or blue when enabled", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: 'grey'})

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: 'red'})

  fireEvent.click(button)
  expect(button).toHaveStyle({backgroundColor: 'blue'})

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: 'grey'})

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({backgroundColor: 'blue'})
});
