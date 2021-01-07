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
      <form className="input-group" onSubmit={this.onSubmit}>
        <input
          className="form-control large-input"
          type="number"
          placeholder="Ответ"
          onChange={this.onInputChange}
          value={inputValue}
        />

        <button className="btn btn-outline-info" type="submit">
          Проверить
        </button>
      </form>
    );
  }
}
