import React, { useState, useEffect } from "react";

export default function CharacterCounter(){
  const [text, setText] = useState('');

  const handleChange = (event) =>{
    setText(event.target.value);
  };

  return(
    <div>
      <input type="text" onChange={handleChange} value={text} />
      <p>input letter: {text.length}</p>
    </div>
  )
}