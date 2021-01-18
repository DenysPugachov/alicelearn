import React, { Component } from "react";
import InputAnswer from "../inputAnswer/inputAnswer";
import randomIntGen from "../randomIntGen/randomIntGen";

export default class Add extends Component {

  state = {
    firstNum: randomIntGen(1000),
    secondNum: randomIntGen(1000),
    rightAnswerCounter: 0,
    wrongAnswerCounter: 0,
  };

  add() {
    const checkAnswer = (userAnswer) => {
      if (!userAnswer) {
        return;
      }

      //reverse answer form bidi:override input
      const revertAnswer = userAnswer.split("").reverse().join("");

      //try to use EqualTo() or something like this;
      // eslint-disable-next-line eqeqeq
      if (revertAnswer == this.state.firstNum + this.state.secondNum) {
        //count rightAnswer
        this.setState(({ rightAnswerCounter }) => {
          return {
            firstNum: randomIntGen(1000),
            secondNum: randomIntGen(1000),
            rightAnswerCounter: rightAnswerCounter + 1,
          };
        });
      } else {
        //count wrongAnswer
        this.setState(({ wrongAnswerCounter }) => {
          return {
            wrongAnswerCounter: wrongAnswerCounter + 1,
          };
        });
      }

      //show answer in console
      console.log(`Right answer = ${this.state.firstNum + this.state.secondNum} \n User input   = ${revertAnswer}`);
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

              <span className="expr-symbol"> + </span>

              <div className="num">
                { this.state.secondNum }

              </div>
            </div>

            <div className="num">
              <InputAnswer onInputAnswer={ checkAnswer } />
            </div>

          </div>
        </div >
      </div >
    );
  }

  render() {
    return this.add();
  }
}
