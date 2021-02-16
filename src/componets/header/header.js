import React from "react";
import { Link } from "react-router-dom";

const Header = props => {

  const expressionBtns = props.buttons.map(btn => {
    const btnStatus = (props.selectedBtn === btn.id) && "active";

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