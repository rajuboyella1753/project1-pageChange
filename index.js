let real = document.getElementById("check");
real.addEventListener('click' ,click);
function click(){
  document.body.style.backgroundColor = "green";
}

let real1 = document.getElementById("check1");
real1.addEventListener('click' ,click1);
function click1(){
  document.body.style.backgroundColor ="yellow";
}


let blue = document.getElementById("remove");
blue.addEventListener('click',update);
function update(){
  document.body.style.backgroundColor = "pink"
}