import React from "react";
import { NavLink } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";


const btnsData = [
  { label: "+", id: "add", color: "danger" },
  { label: "-", id: "sub", color: "warning" },
  { label: "*", id: "mul", color: "success" },
  { label: "/", id: "dev", color: "primary" },
];

const Header = () => {

  const expressionBtns = () => btnsData.map(btn => {

    const cls = ["btn", `btn-outline-${btn.color}`];

    return (
      <NavLink
        className={ cls.join(" ") }
        activeClassName="active"
        key={ btn.id }
        to={ `/${btn.id}` }
        onClick={ () => expressionBtns }
      >
        { btn.label }
      </NavLink>
    );
  });

  return (
    <nav className="navbar navbar-expand bg-transparent mb-3" >
      <div className="container justify-content-around">

        { expressionBtns() }
        <GoogleAuth />
      </div>
    </nav >
  );
};

export default Header;