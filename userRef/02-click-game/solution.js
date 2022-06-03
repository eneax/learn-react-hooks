import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    You're building an app to see how many times you can click
    a button in 10 seconds. 

    The UI has three parts, a button, a timer counting down from 10,
    and a count of how many times you've clicked the button.

    Once the timer reaches 0, remove the button from the UI.
*/

function CounterGame() {
  const [count, setCount] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(10);
  const intervalId = React.useRef(null);

  const noTimeLeft = timeLeft === 0;
  const incrementCount = () => setCount((count) => count + 1);
  const clearTimer = () => window.clearInterval(intervalId.current);

  React.useEffect(() => {
    intervalId.current = window.setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return clearTimer;
  }, []);

  React.useEffect(() => {
    if (noTimeLeft) {
      clearTimer();
    }
  }, [noTimeLeft]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <p>Time left: {timeLeft} seconds</p>
      {noTimeLeft ? null : <button onClick={incrementCount}>+</button>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CounterGame />, rootElement);
