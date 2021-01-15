import React, { Component } from "react";

export default class Header extends Component {

  render() {
    // console.log(this.props.selectedBtn);
    return (
      <nav className="navbar navbar-expand bg-transparent mb-3" >
        <div className="container justify-content-center">
          <ul className="navbar-nav justify-content-around w-50">

            <li className="nav-item">
              <button
                className={ `btn btn-outline-danger ` + (this.props.selectedBtn.add && "active") }
                onClick={ () => {
                  this.props.btnClicked("add");
                } }
              > + </button>
            </li>

            <li className="nav-item">
              <button
                className={ `btn btn-outline-warning ` + (this.props.selectedBtn.sub && "active") }
                onClick={ () => {
                  this.props.btnClicked("sub");
                } }
              > - </button>
            </li>

            <li className="navbar-item">
              <button
                className={ `btn btn-outline-success ` + (this.props.selectedBtn.mul && "active") }
                onClick={ () => {
                  this.props.btnClicked("mul");
                } }
              >*</button>
            </li>

            <li className="navbar-item">
              <button
                className={ `btn btn-outline-primary ` + (this.props.selectedBtn.dev && "active") }
                onClick={ () => {
                  this.props.btnClicked("dev");
                } }
              >/</button>
            </li>

          </ul>
        </div>
      </nav >
    );
  }
};;
