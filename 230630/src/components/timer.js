import React, { useState, useEffect } from "react";

export default function Timer(){
  const [seconds, setSeconds] = useEffect(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => {
      console.log("Return has completed.");
      clearInterval(timer);
    }
  }, []);

  return (
    <div>
      <p>Seconds : {seconds}</p>
    </div>
  );
}