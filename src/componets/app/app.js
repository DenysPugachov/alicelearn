import React, { Component } from "react";
import Header from "../header/header";
import "./bootstrap.min.css";
import "./style.css";
import Expression from "../expressions/Expression";

const version = "v1.01";

const btns = [
  { label: "+", id: "add", cls: "danger" },
  { label: "-", id: "sub", cls: "warning" },
  { label: "*", id: "mul", cls: "success" },
  { label: "/", id: "dev", cls: "primary" },
];

export default class App extends Component {

  state = {
    add: true,
    sub: false,
    mul: false,
    dev: false,
  };

  clearState = () => {
    this.setState(() => {
      return {
        add: false,
        sub: false,
        mul: false,
        dev: false,
      };
    });
  };

  btnClicked = (btn) => {
    // console.log(` Btn clicked form App.js => ${btn}`);

    this.clearState();

    switch (btn) {
      case "add":
        this.setState(({ add: true }));
        break;

      case "sub":
        this.setState(({ sub: true }));
        break;

      case "mul":
        this.setState(({ mul: true }));
        break;

      case "dev":
        this.setState(({ dev: true }));
        break;

      default:
        console.error("Wrong heder props (clickedBtn)");
        break;
    }

  };

  render() {
    return (
      <div className="container" >
        <div className="version">{ version }</div>
        <Header
          buttons={ btns }
          btnClicked={ this.btnClicked }
          selectedBtn={ this.state }
        />
        <hr />
        <Expression selectedExpression={ this.state } />
      </div>
    );
  }
};
