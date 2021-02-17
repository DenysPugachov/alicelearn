import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const btnsData = [
  { label: "+", id: "add", color: "danger" },
  { label: "-", id: "sub", color: "warning" },
  { label: "*", id: "mul", color: "success" },
  { label: "/", id: "dev", color: "primary" },
];

const Header = () => {

  // const [currentUrl, setActiveBtn] = useState("http://localhost:3000/add")

  // const changeActiveBtn = () => {
  //   setActiveBtn(window.location.href)

  // }

  const expressionBtns = () => btnsData.map(btn => {
    // const btnStatus = (window.location.href === `http://localhost:3000/${btn.id}`) && "active";

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

      </div>
    </nav >
  );
};

export default Header;