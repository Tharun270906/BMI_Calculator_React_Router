import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter valid values");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue < 24.9) setStatus("Normal weight");
    else if (bmiValue < 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setStatus("");
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <div className="buttons">
        <button onClick={calculateBMI}>Calculate</button>
        <button onClick={reset}>Reset</button>
      </div>

      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>Status: {status}</p>
        </div>
      )}
    </div>
  );
}

export default App;