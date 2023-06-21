function startTime(){
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h +":" + m + ":" + s;
  let t = setTimeout(startTime, 1000);
}

function checkTime(i) {
  if(i < 10) {i= "0" + i};
  return i;
}

let images =[
  "사진들/건물.jpg",
  "사진들/바다.jpg",
  "사진들/천체.jpg",
];

function clickImg(){
  let image = document.getElementById("image");
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random];
}

