import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // logic for BMI;
  let calcBMI = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter a valid weight and height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(2));

      //
      if (bmi < 25) {
        setMessage("You are Under-Weight");
      } else if (bmi >= 25 && bmi <= 30) {
        setMessage("You are Healthy");
      } else {
        setMessage("you are over-weight");
      }
    }
  };

  let reload = (e) => {
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <div className="container">
          <h2>BMI Calculator</h2>
          <form onSubmit={calcBMI}>
            <div>
              <label>Weight (kilograms) </label>
              <input
                type="text"
                placeholder="Enter your weight in (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label>Height (meter) </label>
              <input
                type="text"
                placeholder="Enter your height in (meter)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline"
                onClick={reload}
                type="submit"
              >
                Reload
              </button>
            </div>

            <div className="center">
              <h3>Your BMI is: {bmi} </h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
