import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent mb-3">
      <div className="container justify-content-start">
        {/* <Link className="navbar-brand text-danger"><span className="h2">Alice</span></Link> */}
        <ul className="navbar-nav justify-content-around w-50">
          <li className="nav-item">
            <button className="btn btn-outline-danger">Додавання </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-warning">Вiднiмання </button>
          </li>
          <li className="navbar-item">
            <button className="btn btn-outline-success">Множення</button>
          </li>
          <li className="navbar-item">
            <button className="btn btn-outline-primary">Дiлення</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
