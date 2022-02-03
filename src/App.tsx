import React, { useState } from "react";
import "./App.scss";
import { create, all } from "mathjs";

const OperatorButton = ({ onClick, operatorText, isSelected }) => (
  <button
    className={"operatorButton " + (isSelected ? "isSelected" : "")}
    onClick={() => onClick(operatorText)}
  >
    {operatorText}
  </button>
);

interface OperandButtonProps {
  number: number;
  addToOperand: (digit: string) => void;
}

const OperandButton = ({ number, addToOperand }: OperandButtonProps) => (
  <button onClick={() => addToOperand(`${number}`)}>{number}</button>
);

function App() {
  const [display, setDisplay] = useState<string>("");
  const [firstOperand, setFirstOperand] = useState<string>("");
  const [operand, setOperand] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  // const [isSelected, setIsSelected] = useState(false);
  // const [selectedOperator, setSelectedOperator] = useState("");

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

  const handleSetSign = () => {
    if (operand.indexOf("-") === -1) {
      // if the operand is positive, set it to negative
      setOperand("-" + operand);
      setDisplay("-" + operand);
    } else {
      // if the operand is negative, set it to positive
      setOperand(operand.substring(1));
      setDisplay(operand.substring(1));
    }
  };

  const evaluateExpression = () => {
    if (firstOperand && operand) {
      const result = math.evaluate(firstOperand + operator + operand);
      setDisplay(math.format(result, { precision: 6 }));
      setFirstOperand(result);
      console.log(firstOperand + operator + operand + "=" + result);
    }
  };

  const onClickOperator = (operator) => {
    handleSetOperands();
    setOperator(operator);
    evaluateExpression();
  };

  // https://mathjs.org/index.html
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
        <button className="operatorButton" onClick={() => handleSetSign()}>
          ±
        </button>
        <button className="operatorButton" onClick={() => console.log("%")}>
          %
        </button>
        <button
          // className={`operatorButton ${isSelected ? "isSelected" : ""}`}
          className={"operatorButton " + (operator === "/" ? "isSelected" : "")}
          onClick={() => {
            console.log("/");
            handleSetOperands();
            setOperator("/");
            // setIsSelected(!isSelected);
            evaluateExpression();
          }}
        >
          /
        </button>
        <button onClick={() => addToOperand("7")}>7</button>
        <button onClick={() => addToOperand("8")}>8</button>
        <button onClick={() => addToOperand("9")}>9</button>
        <button
          className={"operatorButton " + (operator === "*" ? "isSelected" : "")}
          onClick={() => {
            console.log("*");
            handleSetOperands();
            setOperator("*");
            evaluateExpression();
          }}
        >
          *
        </button>
        <button onClick={() => addToOperand("4")}>4</button>
        <button onClick={() => addToOperand("5")}>5</button>
        <button onClick={() => addToOperand("6")}>6</button>
        {/* <button
          className={"operatorButton " + (operator === "-" ? "isSelected" : "")}
          onClick={() => onClickOperator("-")}
        >
          -
        </button> */}
        <OperatorButton
          onClick={() => onClickOperator("-")}
          operatorText={"-"}
          isSelected={operator === "-"}
        />
        <button onClick={() => addToOperand("1")}>1</button>
        <button onClick={() => addToOperand("2")}>2</button>
        <button onClick={() => addToOperand("3")}>3</button>
        <button
          className={"operatorButton " + (operator === "+" ? "isSelected" : "")}
          onClick={() => {
            console.log("+");
            // setSelectedOperator("+");
            handleSetOperands();
            setOperator("+");
            evaluateExpression();
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
            evaluateExpression();
          }}
        >
          =
        </button>
      </section>
    </div>
  );
}

export default App;
