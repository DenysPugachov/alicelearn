import React from "react";

const Header = props => {

  const expressionBtns = props.buttons.map(btn => {
    return (
      <button
        className={ `btn btn-outline-${btn.cls} ` + (props.selectedBtn[btn.id] && "active") }
        key={ btn.id }
        onClick={ () => { props.btnClicked(btn.id); } }
      > { btn.label }
      </button>
    );
  });

  return (
    <nav className="navbar navbar-expand bg-transparent mb-3" >
      <div className="container justify-content-around">

        { expressionBtns }

      </div>
    </nav >
  );
};;
export default Header;