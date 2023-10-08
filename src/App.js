import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(() =>
    localStorage.getItem("counter") ? localStorage.getItem("counter") : 0
  );

  useEffect(() => {
    // Load the counter value from localStorage when the component mounts
    const savedCounter = localStorage.getItem("counter");
    if (savedCounter) {
      setCounter(parseInt(savedCounter));
    }
  }, []);

  useEffect(() => {
    // Save the counter value to localStorage whenever it changes
    localStorage.setItem("counter", counter.toString());
  }, [counter]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default App;
