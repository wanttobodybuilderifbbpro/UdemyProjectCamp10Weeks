import React from "react"

function Greeting({name}){
  return <h1>Hello, {name}</h1>
}

function Practice03(){
  return <Greeting name="John Doe" />;
}


export default Practice03;