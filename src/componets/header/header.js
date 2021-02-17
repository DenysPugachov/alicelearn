import React from "react";
import { Link } from "react-router-dom";


const btnsData = [
  { label: "+", id: "add", color: "danger" },
  { label: "-", id: "sub", color: "warning" },
  { label: "*", id: "mul", color: "success" },
  { label: "/", id: "dev", color: "primary" },
];

const Header = () => {

  const expressionBtns = btnsData.map(btn => {
    const btnStatus = (window.location.href === `http://localhost:3000/${btn.id}`) && "active";

    const cls = ["btn", `btn-outline-${btn.color}`, btnStatus];

    return (
      <Link
        className={ cls.join(" ") }
        key={ btn.id }
        to={ `/${btn.id}` }
      >
        { btn.label }
      </Link>
    );
  });

  return (
    <nav className="navbar navbar-expand bg-transparent mb-3" >
      <div className="container justify-content-around">

        { expressionBtns }

      </div>
    </nav >
  );
};

export default Header;