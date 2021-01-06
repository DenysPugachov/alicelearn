import React from "react";
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

    const answer = firstNum - secondNum;

    console.log(answer);
    return (
      <h1>
        {firstNum} - {secondNum} = {answer}
      </h1>
    );
  }

  return exprType();
}
