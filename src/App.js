import React from 'react';
import { useState } from "react";
import './App.css';

function MyButton({label, onClick}) {
  return (
    <button className="CalcButton" onClick ={onClick}>
      {label}
    </button>
  );
}

function Display({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

export default function App() {

  const[disp, setDisp] = useState(0);
  const[num1, setNum1] = useState(null);
  const[oper, setOper] = useState(null);
  const[num2, setNum2] = useState(null);


  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    var num = value;
    if(oper === null) {
      if(num1 !== null) {
        num = num1 + num;
      }
      setNum1(num);            
      setDisp(num);            
    } else {
      if(num2 !== null) {
        num = num2 + num;
      }
      setNum2(num);            
      setDisp(num);       }
  }

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    setDisp(value);
  }

  const equalClickHandler = (e) => {
    e.preventDefault();

    if (oper === "+") {
      setDisp(parseInt(num1) + parseInt(num2));
    } else {
      setDisp("ERROR");
    }
  }

  const clearClickHandler = (e) => {
    e.preventDefault();

    setDisp(0);
    setNum1(null);
    setOper(null);
    setNum2(null);
  }

  const nameClickHandler = (e) => {
    e.preventDefault();
    // Action to display your name
    alert("Display your name in the calculator display");
  }

  return (
    <div className="App">
      <h1>Mini Calculator</h1>
      <Display display={disp} />
      <div className="ButtonContainer">
        <MyButton label={1} onClick={numberClickHandler}/>
        <MyButton label={2} onClick={numberClickHandler}/>
        <MyButton label={"C"} onClick={clearClickHandler}/>
        <MyButton label={3} onClick={numberClickHandler}/>
        <MyButton label={4} onClick={numberClickHandler}/>
        <MyButton label={"+"} onClick={operatorClickHandler}/>
        <MyButton label={5} onClick={numberClickHandler}/>
        <MyButton label={6} onClick={numberClickHandler}/>
        <MyButton label={"="} onClick={equalClickHandler}/>
      </div>
      <div>
        <MyButton label={"VELASCO"} onClick={nameClickHandler}/>
      </div>
    </div>
  );
}
