import React, { Component } from "react";
import Header from "../header/header";
import "./bootstrap.min.css";
import { Sub, Add, Mul, Dev } from "../expressions";


export default class App extends Component {

  state = {
    add: false,
    sub: false,
    mul: false,
    dev: true,
  };

  btns = [
    { label: "+", id: "add", cls: "danger" },
    { label: "-", id: "sub", cls: "warning" },
    { label: "*", id: "mul", cls: "success" },
    { label: "/", id: "dev", cls: "primary" },
  ];

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
        <Header
          buttons={ this.btns }
          btnClicked={ this.btnClicked }
          selectedBtn={ this.state }
        />
        <hr />
        {this.state.add && <Add /> }
        {this.state.sub && <Sub /> }
        {this.state.dev && <Dev /> }
        {this.state.mul && <Mul /> }

      </div>
    );
  }
};
