import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

const App = () => {
  const [input, setInput] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState("");

  const addToInput = (val) => {
    setInput(input + val);
  };

  const addZeroToInput = (val) => {
    if (input !== "") {
      setInput(input + val);
    }
  };

  const addDecimal = (val) => {
    if (input.indexOf(".") === -1) {
      setInput(input + val);
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const add = () => {
    setPreviousNumber(input);

    setInput("");
    setOperator("plus");
  };

  const subtract = () => {
    setPreviousNumber(input);

    setInput("");
    setOperator("subtract");
  };

  const multiply = () => {
    setPreviousNumber(input);

    setInput("");
    setOperator("multiply");
  };

  const divide = () => {
    setPreviousNumber(input);
    setInput("");
    setOperator("divide");
  };

  const evaluate = () => {
    if (operator === "plus") {
      setInput(parseFloat(previousNumber) + parseFloat(input));
    } else if (operator === "subtract") {
      setInput(parseFloat(previousNumber) - parseFloat(input));
    } else if (operator === "multiply") {
      setInput(parseFloat(previousNumber) * parseFloat(input));
    } else if (operator === "divide") {
      setInput(parseFloat(previousNumber) / parseFloat(input));
    }
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <Input>{input === "" ? 0 : input}</Input>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={divide}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={multiply}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={add}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addDecimal}>.</Button>
          <Button handleClick={addZeroToInput}>0</Button>
          <Button handleClick={evaluate}>=</Button>
          <Button handleClick={subtract}>-</Button>
        </div>
        <ClearButton handleClear={clearInput}>Clear</ClearButton>
      </div>
    </div>
  );
};

export default App;
