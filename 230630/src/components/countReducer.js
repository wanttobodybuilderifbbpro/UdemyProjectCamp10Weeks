import React, { useReducer } from "react";

const initialState = 0

const reducer = (state, action) => {
  switch (action.type){
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    case "RESET":
      return initialState
    default:
      return state
  }
}


/* useState문법과 크게 다르지 않음 */
const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  
  return(
    <div>
      <h1>Counting Numbers</h1>
      <p>Result : {count}</p>
      <button onClick={() => dispatch({type: "INCREMENT"})}>Ascendent</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>Descendent</button>
      <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}

export default CountReducer;