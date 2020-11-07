import React, { useState } from "react";
import "./calculator.css";
import Button from "../button/button";

const Calculator = () => {
  const [previousResult, setPreviousResult] = useState("");
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState(null);

  return (
    <div className="calculator">
      <input id="result" disabled value={result}></input>
      <div>{previousResult}</div>
      <div className="grid-container">
        <Button className="grid-item" func={inputValue}>
          1
        </Button>
        <Button className="grid-item" func={inputValue}>
          2
        </Button>
        <Button className="grid-item" func={inputValue}>
          3
        </Button>
        <Button className="grid-item" func={inputValue}>
          4
        </Button>
        <Button className="grid-item" func={inputValue}>
          5
        </Button>
        <Button className="grid-item" func={inputValue}>
          6
        </Button>
        <Button className="grid-item" func={inputValue}>
          7
        </Button>
        <Button className="grid-item" func={inputValue}>
          8
        </Button>
        <Button className="grid-item" func={inputValue}>
          9
        </Button>
        <Button className="grid-item" func={inputValue}>
          0
        </Button>
        <Button className="grid-item" func={setExpression}>
          +
        </Button>
        <Button className="grid-item" func={setExpression}>
          -
        </Button>
        <Button className="grid-item" func={setExpression}>
          =
        </Button>
      </div>
    </div>
  );
  // Todo: finalResult

  // To powinno się dziać na setExpression 
  function inputValue(value) {
    if (expression) {
      setPreviousResult(result)
      setResult("")
    } else{

    setResult(result + value);
    }
  }
};

export default Calculator;
