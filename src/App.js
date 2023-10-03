import React, { useState, useMemo } from "react";
import "./App.css"
function App() {
  const [memoValue, setMemoValue] = useState(1000000000);
  const [count, setCount] = useState(0);

  function heavyFunction(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum++;
    }
    return sum;
  }

  // const memorizeValue = heavyFunction(render)
  const memorizedValue = useMemo(() => heavyFunction(memoValue), [memoValue]);
  return (
    <div className="app">
      <div className="flex">
        <div>Count: {count}</div>
        <div>Memorized Value: {memorizedValue}</div>
      </div>
      <div className="flex">
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <button onClick={() => setMemoValue(memoValue + 1)}>
          Increase Memorized
        </button>
      </div>
    </div>
  );
}

export default App;
