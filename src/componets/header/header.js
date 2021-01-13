import React, { Component } from "react";

export default class Header extends Component {

  state = {
    add: false,
    sub: true,
    mul: false,
    dev: false,
  };

  onBntClicked = clickedBtn => {

    switch (clickedBtn) {

      case "add":
        this.setState(({ add }) => {
          return {
            add: !add,
            sub: false,
            mul: false,
            dev: false,
          };
        });
        break;

      case "sub":
        this.setState(({ sub }) => {
          return {
            add: false,
            sub: !sub,
            mul: false,
            dev: false,
          };
        });
        break;

      case "mul":
        this.setState(({ mul }) => {
          return {
            add: false,
            mul: !mul,
            sub: false,
            dev: false,
          };
        });
        break;

      case "dev":
        this.setState(({ dev }) => {
          return {
            dev: !dev,
            sub: false,
            mul: false,
          };
        });
        break;

      default:
        console.log("Wrong selected btn value!");
        break;
    }


  };


  render() {

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-transparent mb-3" >
        <div className="container justify-content-start">
          {/* <Link className="navbar-brand text-danger"><span className="h2">Alice</span></Link> */ }
          <ul className="navbar-nav justify-content-around w-50">
            <li className="nav-item">
              <button
                className={ `btn btn-outline-danger ` + (this.state.add && "active") }
                onClick={ () => { this.onBntClicked("add"); } }
              >Додавання </button>
            </li>

            <li className="nav-item">
              <button
                className={ `btn btn-outline-warning ` + (this.state.sub && "active") }
                onClick={ () => { this.onBntClicked("sub"); } }
              > Вiднiмання </button>
            </li>

            <li className="navbar-item">
              <button
                className={ `btn btn-outline-success ` + (this.state.mul && "active") }
                onClick={ () => { this.onBntClicked("mul"); } }
              >Множення</button>
            </li>

            <li className="navbar-item">
              <button
                className={ `btn btn-outline-primary ` + (this.state.dev && "active") }
                onClick={ () => { this.onBntClicked("dev"); } }
              >Дiлення</button>
            </li>

          </ul>
        </div>
      </nav >
    );
  }
};;
