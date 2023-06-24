import React from "react";
import img01 from "./hw_image/BritishEmpire.png";
import img02 from "./hw_image/EmpireFrancais.png";
import img03 from "./hw_image/ImperioEspanol.png";
import img04 from "./hw_image/NederlandseKoloniale.png";

/* ↑ import () from ~~~~.jpg/png/jpeg 여기서 ()의 부분은
해당 스크립트 안에서 img이름을 어떻게 하겠느냐와 관련된 것이다. 
혼동하지 말 것. 
*/

function Rullet(){
  const images =[img01, img02, img03, img04];

  const getRulletImages = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return(
    <div>
      <h1>Random Image</h1>
      <img
        src={getRulletImages()}
        onClick={getRulletImages}
        alt="Rullet"
        style={{width:"400px"}}
      />
    </div>
  );
}

export default Rullet;