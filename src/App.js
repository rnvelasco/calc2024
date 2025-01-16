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

  const[disp, setDisp] = useState('10 Things That Require Zero Talent');
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

  const clickHandler = (e) => {
    e.preventDefault();
    const param  = e.target.innerHTML;
    switch(param) {
      case '1':
        setDisp('Being On Time'); break;
      case '2':
        setDisp('Making An Effort'); break;
      case '3':
        setDisp('Being High Energy'); break;
      case '4':
        setDisp('Having A Positive Attitude'); break;
      case '5':
        setDisp('Being Passionate'); break;
      case '6':
        setDisp('Using Good Body Language'); break;
      case '7':
          setDisp('Being Coachable'); break;
      case '8':
        setDisp('Doing A Little Extra'); break;
      case '9':
        setDisp('Being Prepared'); break;
      case '0':
        setDisp('Having A Strong Work Ethic'); break;
      case 'RESET':
        setDisp('10 Things That Require Zero Talent'); break;
      case 'NAME':
        setDisp('JUAN DELA CRUZ'); break;
      case 'What I learned?':
        setDisp('REACT, JAVA SPRINGBOOT'); break;
      default:
        setDisp('10 Things That Require Zero Talent');
    }
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <h1>JUAN DELA CRUZ - IT3A</h1>
        <CalcDisplay display={disp} />
        <CalcButton label={"What I learned?"} onClick={clickHandler} buttonClassName={"TextButton"}/>
        <CalcButton label={"What I want to learn?"} onClick={clickHandler} buttonClassName={"TextButton"}/>
        <CalcButton label={"How will I learn?"} onClick={clickHandler} buttonClassName={"TextButton"}/>
        <div className="ButtonContainer">
          <CalcButton label={7} onClick={clickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={8} onClick={clickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={9} onClick={clickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={4} onClick={clickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={5} onClick={clickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={6} onClick={clickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={1} onClick={clickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={2} onClick={clickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={3} onClick={clickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={"RESET"} onClick={clickHandler}/>
          <CalcButton label={0} onClick={clickHandler} buttonClassName={"NumButton"}/>
          <CalcButton label={"NAME"} onClick={clickHandler}/>
        </div>
      </div>
    </div>
  );
}
