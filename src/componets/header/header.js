import React from "react";
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Route } from "react-router-dom";


export default function Header({ onServiceChange, serviceType }) {

  const btnCls = (serviceType === "Online")
    ? ["btn", "btn-success"]
    : ["btn", "btn-outline-secondary text-success"];

  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-transparent mb-3">
        <div className="container justify-content-start">
          <Link className="navbar-brand" to="/"><span className="h2">Додавання</span></Link>
          <ul className="navbar-nav justify-content-around w-50">
            <li className="nav-item">
              <Link className="nav-link text-success" to="/">Вiднiмання </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link text-success" to="/">Множення</Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link text-success" to="/">Дiлення</Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link text-success" to="/">Test</Link>
            </li>
            <li className="navbar-item">
              <button className="btn btn-outline-success" >
               Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  );
}