import React, { Component } from "react";
import "./inputAnswer.css";

export default class InputAnswer extends Component {
  state = {
    inputValue: "",
  };

  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onInputAnswer(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <form className="answer-form" onSubmit={ this.onSubmit }>
        <input
          autoFocus
          className="input-answer"
          type="number"
          placeholder="..."
          onChange={ this.onInputChange }
          value={ inputValue }
        />
        {/* <button className="btn btn-outline-info submit-answer-btn" type="submit">
          <span>&#10003;</span>
        </button> */}
      </form>
    );
  }
}
