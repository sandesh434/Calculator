import React, { useState } from "react";

export default function Home() {
  const [ans, setAns] = useState("");

  const handleClick = event => {
    setAns(ans.concat(event.target.name));
  };

  const clear = () => {
    setAns("");
  };

  const backspace = () => {
    setAns(ans.slice(0, -1));
  };

  const calculate =()=>{
    setAns(Number(eval(ans).toString()).toFixed(2));
  }

  return (
    <div className="calculator">
      <div className="output">
         {/* <div className="previous-val">Previous value goes here</div> // */}
        <div className="current-val">{ans}</div>
      </div>

     <button className="span-two" onClick={clear}>
        DEL
     </button>
      <button onClick={backspace}>C</button>
      <button name="*" onClick={handleClick}>
        *
      </button>
      <button name="1" onClick={handleClick}>
        1
      </button>
      <button name="2" onClick={handleClick}>
        2
      </button>
      <button name="3" onClick={handleClick}>
        3
      </button>
      <button name="+" onClick={handleClick}>
        +
      </button>
      <button name="4" onClick={handleClick}>
        4
      </button>
      <button name="5" onClick={handleClick}>
        5
      </button>
      <button name="6" onClick={handleClick}>
        6
      </button>
      <button name="-" onClick={handleClick}>
        -
      </button>
      <button name="7" onClick={handleClick}>
        7
      </button>
      <button name="8" onClick={handleClick}>
        8
      </button>
      <button name="9" onClick={handleClick}>
        9
      </button>
      <button name="/" onClick={handleClick}>
        /
      </button>
      <button name="0" onClick={handleClick}>
        0
      </button>
      <button name="." onClick={handleClick}>
        .
      </button>
      <button name="%" onClick={handleClick}>
        %
      </button>
      <button  onClick={calculate}>=</button>
    </div>
  );
}