import React, { useState } from "react";
import "./App.scss";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <section>
        <h1>{input}</h1>
        <button className="operator" onClick={() => setInput("")}>
          c
        </button>
        <button className="operator" onClick={() => setInput(input + "±")}>
          ±
        </button>
        <button className="operator" onClick={() => setInput(input + "%")}>
          %
        </button>
        <button className="operator" onClick={() => setInput(input + "/")}>
          /
        </button>
        <button onClick={() => setInput(input + "7")}>7</button>
        <button onClick={() => setInput(input + "8")}>8</button>
        <button onClick={() => setInput(input + "9")}>9</button>
        <button className="operator" onClick={() => setInput(input + "*")}>
          *
        </button>
        <button onClick={() => setInput(input + "4")}>4</button>
        <button onClick={() => setInput(input + "5")}>5</button>
        <button onClick={() => setInput(input + "6")}>6</button>
        <button className="operator" onClick={() => setInput(input + "-")}>
          -
        </button>
        <button onClick={() => setInput(input + "1")}>1</button>
        <button onClick={() => setInput(input + "2")}>2</button>
        <button onClick={() => setInput(input + "3")}>3</button>
        <button className="operator" onClick={() => setInput(input + "+")}>
          +
        </button>
        <button className="zeroButton" onClick={() => setInput(input + "0")}>
          0
        </button>
        <button onClick={() => setInput(input + ".")}>.</button>
        <button className="equalsButton" onClick={() => setInput(input + "=")}>
          =
        </button>
      </section>
    </div>
  );
}

export default App;
