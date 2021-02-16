import React, { useState } from "react";
import Header from "../header/header";
import "./bootstrap.min.css";
import "./style.css";
import { Sub, Add, Mul, Dev } from "../expressions/expression";
import Timer from "../timer/timer";
import { BrowserRouter, Route } from "react-router-dom";


const appVersion = "v1.051";

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

      <BrowserRouter>

        <Header
          buttons={ btns }
          btnClicked={ onBtnClicked }
          selectedBtn={ showExpression }
        />

        <hr />

        <Timer />

        {/* <Expression selectedExpression={ showExpression } /> */ }

        <Route path="/sub" exact component={ Sub } />
        <Route path="/add" exact component={ Add } />
        <Route path="/mul" exact component={ Mul } />
        <Route path="/dev" exact component={ Dev } />

      </BrowserRouter>

    </div>
  );
};


export default App;