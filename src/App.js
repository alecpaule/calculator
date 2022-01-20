import React, { useState } from "react";
import "./App.scss";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <section>
        <h1>{input}</h1>
        <div className="buttons">
          <button onClick={() => setInput("")}>c</button>
          <button onClick={() => setInput(input + "±")}>±</button>
          <button onClick={() => setInput(input + "%")}>%</button>
          <button onClick={() => setInput(input + "/")}>/</button>
          <button onClick={() => setInput(input + "7")}>7</button>
          <button onClick={() => setInput(input + "8")}>8</button>
          <button onClick={() => setInput(input + "9")}>9</button>
          <button onClick={() => setInput(input + "*")}>*</button>
          <button onClick={() => setInput(input + "4")}>4</button>
          <button onClick={() => setInput(input + "5")}>5</button>
          <button onClick={() => setInput(input + "6")}>6</button>
          <button onClick={() => setInput(input + "-")}>-</button>
          <button onClick={() => setInput(input + "1")}>1</button>
          <button onClick={() => setInput(input + "2")}>2</button>
          <button onClick={() => setInput(input + "3")}>3</button>
          <button onClick={() => setInput(input + "+")}>+</button>
          <button onClick={() => setInput(input + "0")}>0</button>
          <button onClick={() => setInput(input + ".")}>.</button>
          <button onClick={() => setInput(input + "=")}>=</button>
        </div>
      </section>
    </div>
  );
}

export default App;
