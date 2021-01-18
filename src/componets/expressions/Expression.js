import Sub from "./sub";
import Add from "./add";
import Mul from "./mul";
import Dev from "./dev";
import "./expression.css";

const Expression = props => {

  return (
    <div>
      { props.selectedExpression.add && <Add /> }
      { props.selectedExpression.sub && <Sub /> }
      { props.selectedExpression.dev && <Dev /> }
      { props.selectedExpression.mul && <Mul /> }
    </div>
  );


};

export default Expression;