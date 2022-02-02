import React, { useState } from "react";
import "./App.scss";
import { create, all } from "mathjs";

function App() {
  const [display, setDisplay] = useState("");
  const [operand, setOperand] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [operator, setOperator] = useState("");

  const addToOperand = (digit) => {
    if (operand.length < 10) {
      setOperand(operand + digit);
      setDisplay(operand + digit);
    }
  };

  const handleSetOperands = () => {
    if (!firstOperand) {
      // if firstOperand is empty (i.e. the first calculation)
      setFirstOperand(operand);
      setOperand("");
    } else {
      // if firstOperand is not empty (i.e. continued calculations, result is set as firstOperand)
      setOperand("");
    }
  };

  const config = {};
  const math = create(all, config);

  return (
    <div className="App">
      <section>
        <h1>{display}</h1>
        <button
          className="operatorButton"
          onClick={() => {
            setDisplay("");
            setOperand("");
            setFirstOperand("");
          }}
        >
          c
        </button>
        <button className="operatorButton" onClick={() => console.log("±")}>
          ±
        </button>
        <button className="operatorButton" onClick={() => console.log("%")}>
          %
        </button>
        <button
          className="operatorButton"
          onClick={() => {
            handleSetOperands();
            setOperator("/");
            console.log("/");
          }}
        >
          /
        </button>
        <button onClick={() => addToOperand("7")}>7</button>
        <button onClick={() => addToOperand("8")}>8</button>
        <button onClick={() => addToOperand("9")}>9</button>
        <button
          className="operatorButton"
          onClick={() => {
            handleSetOperands();
            setOperator("*");
            console.log("*");
          }}
        >
          *
        </button>
        <button onClick={() => addToOperand("4")}>4</button>
        <button onClick={() => addToOperand("5")}>5</button>
        <button onClick={() => addToOperand("6")}>6</button>
        <button
          className="operatorButton"
          onClick={() => {
            handleSetOperands();
            setOperator("-");
            console.log("-");
          }}
        >
          -
        </button>
        <button onClick={() => addToOperand("1")}>1</button>
        <button onClick={() => addToOperand("2")}>2</button>
        <button onClick={() => addToOperand("3")}>3</button>
        <button
          className="operatorButton"
          onClick={() => {
            handleSetOperands();
            setOperator("+");
            console.log("+");
          }}
        >
          +
        </button>
        <button className="zeroButton" onClick={() => addToOperand("0")}>
          0
        </button>
        <button onClick={() => addToOperand(".")}>.</button>
        <button
          className="equalsButton"
          onClick={() => {
            const result = math.evaluate(firstOperand + operator + operand);
            setDisplay(math.format(result, { precision: 7 }));
            setFirstOperand(result);
            console.log(firstOperand + operator + operand + "=" + result);
          }}
        >
          =
        </button>
      </section>
    </div>
  );
}

export default App;
