import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const [disabled, setDisabled] = useState(false);

  const fullButtonColor = disabled ? 'grey' : buttonColor

  const handleClick = () => {
    setButtonColor(newButtonColor);
  };

  // const handleChange = () => {
  //   (e) => setDisabled(e.target.checked);
  // };

  return (
    <>
      <button
        style={{ backgroundColor: fullButtonColor }}
        onClick={handleClick}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </>
  );
}

export default App;
