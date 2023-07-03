import React, { useReducer, useState } from 'react';

const initialState = 0;

// useState와 다른 점 : reducer의 경우 initialState로 실행

const reducer = (state, action) => {
  switch(action.type){
    case "INCRESE":
      return state + 1;
    case "DECRESE":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function Counter(){
  const [count, dispatch] = useReducer(reducer, initialState);
  {/* dispatch는 액션을 발생시키는 함수 */}

  return(
    <div>
      <h1>숫자 카운트</h1>/
      <p>숫자: {count}</p>
      <button onClick={() => dispatch({ type : "INCRESE" })}>Ascendents</button>
      <button onClick={() => dispatch({ type : "DECRESE" })}>Descendents</button>
      <button onClick={() => dispatch({ type : "RESET" })}>Reset</button>
    </div>
  );
}