import React from 'react';
import { useState } from "react";
import './App.css';

function CalcButton({label, onClick, buttonClassName = "CalcButton"}) {
  return (
    <button className= {buttonClassName} onClick = {onClick}>
      {label}
    </button>
  );
}

function CalcDisplay({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

function getOperand  (value, temp) {
  if (temp == null) {
    temp = value;
  } else {
    temp = temp + value;
  }
  return (
    parseInt(temp)
  );
}

export default function App() {

  const[disp, setDisp] = useState(0);
  const[num1, setNum1] = useState(0);
  const[num2, setNum2] = useState(0);
  const[oper, setOper] = useState(null);


  const numberClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
        
    var num;
    if(oper === null) {
      num = getOperand(value, num1)
      setNum1(num);
    } else {
      num = getOperand(value, num2)
      setNum2(num);
    }
    setDisp(num);
  }

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    setNum1(disp);
    setDisp(value);
  }

  const equalClickHandler = (e) => {
    e.preventDefault();
    if (oper === "+") {
      setDisp(parseInt(num1) + parseInt(num2));
    } else if (oper === "-") {
        setDisp(parseInt(num1) - parseInt(num2));
    } else if (oper === "*") {
      setDisp(parseInt(num1) * parseInt(num2));
    } else if (oper === "/") {
      setDisp(parseInt(num1) / parseInt(num2));
    } else {
      setDisp("ERROR");
      alert("Add the operation!")
    }
    setNum1(null);
    setOper(null);
    setNum2(null);
  }

  const clearClickHandler = (e) => {
    e.preventDefault();

    setDisp(0);
    setNum1(null);
    setOper(null);
    setNum2(null);
  }

  const decimalClickHandler = (e) => {
    e.preventDefault();
    // Action to display your name
    alert("Put logic for decimal point here.");
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <h1>New Calculator</h1>
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={"^"} onClick={clearClickHandler} />
          <CalcButton label={"%"} onClick={operatorClickHandler} />
          <CalcButton label={"±"} onClick={operatorClickHandler} />
          <CalcButton label={"/"} onClick={operatorClickHandler} />
          <CalcButton label={7} onClick={numberClickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={8} onClick={numberClickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={9} onClick={numberClickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={"*"} onClick={operatorClickHandler} />
          <CalcButton label={4} onClick={numberClickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={5} onClick={numberClickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={6} onClick={numberClickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={"+"} onClick={operatorClickHandler} />
          <CalcButton label={1} onClick={numberClickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={2} onClick={numberClickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={3} onClick={numberClickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={"-"} onClick={operatorClickHandler} />
          <CalcButton label={"C"} onClick={clearClickHandler} buttonClassName={"ClearButton"}/>
          <CalcButton label={0} onClick={numberClickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={"."} onClick={decimalClickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={"="} onClick={equalClickHandler}/>
        </div>
      </div>
    </div>
  );
}
