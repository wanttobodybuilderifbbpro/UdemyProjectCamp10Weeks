import React, {useState} from "react";

function Practice02(){
  const[counter, setCount] = useState(0);
  return(
    <div>
      카운트 : {counter}
      <button onClick={() => setCount(counter+1)}>+1</button>
      <button onClick={() => setCount(counter-1)}>-1</button>
    </div>
  )
}

export default Practice02;