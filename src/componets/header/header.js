import React, { Component } from "react";

export default class Header extends Component {

  state = {
    add: false,
    sub: true,
    mul: false,
    dev: false,
  };

  clearSelect = () => {
    this.setState(() => {
      return {
        add: false,
        sub: false,
        mul: false,
        dev: false,
      };
    });
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
                onClick={ () => {
                  this.clearSelect();
                  this.setState(({ add }) => { return { add: !add, }; });
                } }
              >Додавання </button>
            </li>

            <li className="nav-item">
              <button
                className={ `btn btn-outline-warning ` + (this.state.sub && "active") }
                onClick={ () => {
                  this.clearSelect();
                  this.setState(({ sub }) => { return { sub: !sub, }; });
                } }
              > Вiднiмання </button>
            </li>

            <li className="navbar-item">
              <button
                className={ `btn btn-outline-success ` + (this.state.mul && "active") }
                onClick={ () => {
                  this.clearSelect();
                  this.setState(({ mul }) => { return { mul: !mul, }; });
                } }
              >Множення</button>
            </li>

            <li className="navbar-item">
              <button
                className={ `btn btn-outline-primary ` + (this.state.dev && "active") }
                onClick={ () => {
                  this.clearSelect();
                  this.setState(({ dev }) => { return { dev: !dev, }; });
                } }
              >Дiлення</button>
            </li>

          </ul>
        </div>
      </nav >
    );
  }
};;
