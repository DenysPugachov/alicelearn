import React, { Component } from "react";
import InputAnswer from "../inputAnswer/inputAnswer";
import randomIntGen from "../randomIntGen/randomIntGen";

export default class Expression extends Component {

  state = {
    firstNum: randomIntGen(1000),
    secondNum: randomIntGen(1000),
    rightAnswerCounter: 0,
    wrongAnswerCounter: 0,
  };

  sub() {
    if (this.state.firstNum < this.state.secondNum) {
      [this.state.firstNum, this.state.secondNum] = [
        this.state.secondNum,
        this.state.firstNum,
      ];
    }

    const checkAnswer = (userAnswer) => {
      if (!userAnswer) {
        return;
      }
      if (userAnswer == this.state.firstNum - this.state.secondNum) {
        this.setState(({ rightAnswerCounter }) => {
          return {
            firstNum: randomIntGen(),
            secondNum: randomIntGen(),
            rightAnswerCounter: rightAnswerCounter + 1,
          };
        });
      } else {
        this.setState(({ wrongAnswerCounter }) => {
          return {
            wrongAnswerCounter: wrongAnswerCounter + 1,
          };
        });
      }

      console.log(this.state.firstNum - this.state.secondNum, userAnswer);
    };

    return (
      <div>
        <div className="h3">
          <span className="text-success d-block">
            Верно: { this.state.rightAnswerCounter }
          </span>
          <span className="text-danger">
            Мимо: { this.state.wrongAnswerCounter }
          </span>
        </div>
        <br />

        <div className="d-flex">
          <span className="h1 text-nowrap mx-3 d-flex align-items-center">
            { this.state.firstNum } - { this.state.secondNum } =
          </span>
          <InputAnswer onInputAnswer={ checkAnswer } />
        </div>
      </div>
    );
  }

  render() {
    return this.sub();
  }
}
