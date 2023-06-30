import React, { useState } from "react";

export default function Counter(){
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <p>Result : {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}