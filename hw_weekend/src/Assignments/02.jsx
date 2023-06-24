import React, {useState, useEffect} from "react";

function Clock(){
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(timer))
  }, []);

  return(
    <div>
      <h1>Clock</h1>
      <span>{time.toLocaleTimeString()}</span>
      {/* toLocaleTimeString으로 시간 정보를 가져올 수 있다 
          .jsx와 같은 확장자에서는 중괄호 열고 주석을 작성한다.*/}
    </div>
  )

}



export default Clock;