/*let input = document.querySelector("input");
console.log(input);
let h2 = document.querySelector("h2");
console.log(h2);
let button = document.querySelector("button");
console.log(button);

function cliquei() {

  event.preventDefault();
  h2.innerHTML = input.value;

}*/



let h2 = document.querySelector("#mundo");
let input = document.querySelector("#entrada");
function mudartexto() {

  event.preventDefault();
  h2.innerHTML = input.value;
  //return h2;

}