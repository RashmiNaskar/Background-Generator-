var cs= document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body= document.getElementById("gradient");

 function setcolor()
 {
    document.body.style.background = "linear-gradient(to right," +color1.value+ "," +color2.value+ ")";
    cs.textContent= document.body.style.background+";";
 }


 color1.addEventListener("input", setcolor);
 color2.addEventListener("input", setcolor);
 