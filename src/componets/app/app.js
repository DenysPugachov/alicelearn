import React, { useState } from "react";
import Header from "../header/header";
import "./bootstrap.min.css";
import "./style.css";
import Expression from "../expressions/Expression";

const appVersion = "v1.05";

const btns = [
  { label: "+", id: "add", color: "danger" },
  { label: "-", id: "sub", color: "warning" },
  { label: "*", id: "mul", color: "success" },
  { label: "/", id: "dev", color: "primary" },
];

const App = () => {

  const [showExpression, setShownExpression] = useState("add");

  const onBtnClicked = btn => setShownExpression(btn);

  return (
    <div className="container" >
      <div className="version">{ appVersion }</div>
      <Header
        buttons={ btns }
        btnClicked={ onBtnClicked }
        selectedBtn={ showExpression }
      />
      <hr />
      <Expression selectedExpression={ showExpression } />
    </div>
  );
};


export default App;