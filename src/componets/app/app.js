import React, { Component } from "react";
import Header from "../header/header";
import "./bootstrap.min.css";
import "./style.css";
import Expression from "../expressions/Expression";

const appVersion = "v1.04";

const btns = [
  { label: "+", id: "add", cls: "danger" },
  { label: "-", id: "sub", cls: "warning" },
  { label: "*", id: "mul", cls: "success" },
  { label: "/", id: "dev", cls: "primary" },
];

export default class App extends Component {

  state = {
    showExpression: "add",
  };

  onBtnClicked = (btn) => {
    this.setState({ showExpression: btn });
  };

  render() {
    return (
      <div className="container" >
        <div className="version">{ appVersion }</div>
        <Header
          buttons={ btns }
          btnClicked={ this.onBtnClicked }
          selectedBtn={ this.state.showExpression }
        />
        <hr />
        <Expression selectedExpression={ this.state.showExpression } />
      </div>
    );
  }
};
