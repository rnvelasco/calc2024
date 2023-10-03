import React from 'react';
import { useState } from "react";
import './App.css';

function CalcButton({label, onClick, buttonClassName = "CalcButton"}) {
  return (
    <button className={buttonClassName} onClick ={onClick}>
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
      <div className="CalcContainer">
        <h1>Mini Calculator</h1>
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={1} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={2} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"C"} onClick={clearClickHandler} />
          <CalcButton label={3} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={4} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"+"} onClick={operatorClickHandler} />
          <CalcButton label={5} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={6} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"="} onClick={equalClickHandler}/>
        </div>
        <div className="Name">
          <CalcButton label={"VELASCO"} onClick={nameClickHandler} buttonClassName={"CalcButtonName"}/>
        </div>
      </div>
      <div className="Notes">
          <p>Additional Requirements:
            <ul>
              <li>
                At the top add your Calculator of Fullname and Section (e.g Calculator of Juan Dela Cruz - IT3A) instead of "Mini Calculator".
              </li>            
              <li>
                Add an additional button at the bottom (e.g. VELASCO button in the example) with your Surname.            
              </li>
              <li>
                When the surname button is clicked, display your fullname in the calculator's display (e.g Juan Dela Cruz)
              </li>
            </ul>
            Note: Feel free to design your calculator.
          </p>
        </div>
    </div>
  );
}
