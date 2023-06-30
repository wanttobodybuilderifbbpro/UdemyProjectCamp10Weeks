import React, { useReducer } from "react";

const initialState = {
  theme : "light"
}

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return{
        ...state, 
        theme: state.theme === "light" ? "dark" : "light"
      }
    default:
    return state;
  }
}

const ThemeSwitcher = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <div>
      <p>Theme colour: {state.theme}</p>
      <button onClick={() => dispatch({type: "TOGGLE_THEME"})}>Toggle change to (colour)</button>
    </div>
  )
};

export default ThemeSwitcher;