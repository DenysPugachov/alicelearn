import Header from "../header/header";
import "./bootstrap.min.css";
import { Sub, Add, Mul, Dev } from "../expressions";

function App() {

  return (
    <div className="container">
      <Header />
      <Sub />
      <hr />
      <Add />
      <hr />
      <Mul />
      <hr />
      <Dev />
    </div>
  );
}

export default App;
