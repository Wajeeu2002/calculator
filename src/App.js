import "./styles.css";
import Digit from "./digits";
import { useState } from "react";

export default function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (val) => {
    if(ops.includes(val) && calc ==='' ||
    ops.includes(val) && ops.includes(calc.slice(-1))
    )
    {
    return;
    }
    setCalc(calc + val);
    if(!ops.includes(val)){
      setResult(eval(calc+val).toString());
  
    }

}
const equalTo =() =>{
  setCalc(eval(calc).toString())
}
const deleteItem = () => {

  if(calc ===""){
 return;

}
const value =calc.slice(0,-1)
setCalc(value)
}

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
  {result ?<span>({result})</span>:calc}&nbsp;
        {calc || "0"}
        </div>

        <div className="operator">
          <button onClick={() => updateCalc("+")}> + </button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={deleteItem}>Del</button>
        </div>
        <div className="digits">
          <Digit onAdd={updateCalc} />
          <button onClick={() => updateCalc("0")}>0</button>
         <button onClick={() => updateCalc(".")}>.</button>
         <button onClick={equalTo}>=</button>
        </div>
      </div>
    </div>
  );
}
