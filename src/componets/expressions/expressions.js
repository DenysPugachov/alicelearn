import React from "react";
import InputAnswer from "../inputAnswer/inputAnswer";
import randomIntGen from "../randomIntGen/randomIntGen";

export default function Expression() {
  const exprType = sub;

  function add() {
    return (
      <h1>
        {randomIntGen()} + {randomIntGen()} = <input />
      </h1>
    );
  }

  function sub() {
    let firstNum = randomIntGen();
    let secondNum = randomIntGen();

    if (firstNum < secondNum) {
      [firstNum, secondNum] = [secondNum, firstNum];
    }

    // const answer = firstNum - secondNum;

    const checkAnswer = (userAnswer) => {
      if (!userAnswer) {
        return;
      }
      if (userAnswer == firstNum - secondNum) {
        console.log("yes!!!");
        sub();
      }
      console.log(firstNum - secondNum, userAnswer);
    };

    return (
      <div className="d-flex">
        <span className="h1 text-nowrap mx-3 d-flex align-items-center">
          {firstNum} - {secondNum} =
        </span>
        <InputAnswer onInputAnswer={checkAnswer} />
      </div>
    );
  }

  return exprType();
}
