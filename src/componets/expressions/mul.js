import React, { Component } from "react";
import InputAnswer from "../inputAnswer/inputAnswer";
import randomIntGen from "../randomIntGen/randomIntGen";

export default class Mul extends Component {

  state = {
    firstNum: randomIntGen(100),
    secondNum: randomIntGen(100),
    rightAnswerCounter: 0,
    wrongAnswerCounter: 0,
  };

  mul() {
    const checkAnswer = (userAnswer) => {
      if (!userAnswer) {
        return;
      }

      //try to use EqualTo() or something like this;
      // eslint-disable-next-line eqeqeq
      if (userAnswer == this.state.firstNum * this.state.secondNum) {
        //make count of rightAnswer
        this.setState(({ rightAnswerCounter }) => {
          return {
            firstNum: randomIntGen(),
            secondNum: randomIntGen(),
            rightAnswerCounter: rightAnswerCounter + 1,
          };
        });
      } else {
        //make count of wrongAnswer
        this.setState(({ wrongAnswerCounter }) => {
          return {
            wrongAnswerCounter: wrongAnswerCounter + 1,
          };
        });
      }

      console.log(`Right answer = ${this.state.firstNum * this.state.secondNum} \nUser input   = ${userAnswer}`);
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
            { this.state.firstNum } * { this.state.secondNum } =
          </span>
          <InputAnswer onInputAnswer={ checkAnswer } />
        </div>
      </div>
    );
  }

  render() {
    return this.mul();
  }
}
