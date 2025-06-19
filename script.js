let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
    second
  )}`;

  let ps = (360 / 60) * second - 90;
  let ms = (360 / 60) * minute - 90;
  let hs = (360 / 12) * hour - 90;

  sElement.style.transform = `rotate(${ps}deg)`;
  mElement.style.transform = `rotate(${ms}deg)`;
  hElement.style.transform = `rotate(${hs}deg)`;
}

function fixZero(date) {
  return date < 10 ? `0${date}` : date;
}
/* 
//fix zero, function
 com if inline 

elemento .styletrnasforn = rotate valor deeg



 criculo 360g
 /60

 cada seg 6gr

 menos o 0 
 fixo em -90 no inicio

*/
setInterval(updateClock, 1000);
updateClock();
