import React, { Component } from "react";
import InputAnswer from "../inputAnswer/inputAnswer";
import randomIntGen from "../randomIntGen/randomIntGen";
import "./mul.css";

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
        <hr />
        <br />

        <div className="expr-container">
          <div className="expression-wrapper">
            <div className="number-box ">

              <div className="num">
                { this.state.firstNum }
              </div>

              <span className="expr-symbol"> * </span>

              <div className="num">
                { this.state.secondNum }

              </div>
            </div>

            <div className="num">
              <InputAnswer onInputAnswer={ checkAnswer } />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.mul();
  }
}
