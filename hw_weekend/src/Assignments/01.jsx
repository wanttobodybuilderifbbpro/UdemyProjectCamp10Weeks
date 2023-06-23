import React from "react";

function Hello(props){
  return <h1>Bonjour! {props.name}</h1>;
}

function Practice01() {
  return <Hello name="Josh Park" />;
}

export default Practice01;