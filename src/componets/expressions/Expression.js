import Sub from "./sub";
import Add from "./add";
import Mul from "./mul";
import Dev from "./dev";
import "./expression.css";

const Expression = props => {

  const showExpression = props.selectedExpression;

  return (
    <div>
      { showExpression === "add" && <Add /> }
      { showExpression === "sub" && <Sub /> }
      { showExpression === "dev" && <Dev /> }
      { showExpression === "mul" && <Mul /> }
    </div>
  );


};

export { Sub, Add, Mul, Dev };