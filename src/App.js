// import './App.css';
import randomIntGen from "./componets/randomIntGen/randomIntGen";
import Header from "./componets/header/header"

function App() {
  return (
    <div className="container">
      <Header/>
     <h1>{randomIntGen(100)} <br/>
     + <br/> 
     {randomIntGen(100)} <br/> <input/>
     </h1>
     <h1>{randomIntGen(100)} <br/>
     + <br/> 
     {randomIntGen(100)} <br/> <input/>
     </h1>
     <h1>{randomIntGen(100)} <br/>
     + <br/> 
     {randomIntGen(100)} <br/> <input/>
     </h1>
     <h1>{randomIntGen(100)} <br/>
     + <br/> 
     {randomIntGen(100)} <br/> <input/>
     </h1>
     <h1>{randomIntGen(100)} <br/>
     + <br/> 
     {randomIntGen(100)} <br/> <input/>
     </h1>
    </div>
  );
}

export default App;
