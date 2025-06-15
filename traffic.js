let RedLight = document.getElementById("red");
let GreenLight = document.getElementById("green");
let OrangeLight = document.getElementById("orange");

let redBtn = document.getElementById("btn1");
let greenBtn = document.getElementById("btn3");
let orangeBtn = document.getElementById("btn2");

redBtn.onclick = function(){
    RedLight.style.backgroundColor = "red";
    GreenLight.style.backgroundColor = "grey";
    OrangeLight.style.backgroundColor = "grey";

}

orangeBtn.onclick = function(){
    OrangeLight.style.backgroundColor = "orange";
    RedLight.style.backgroundColor = "grey";
    GreenLight.style.backgroundColor = "grey";

}

greenBtn.onclick = function(){
    GreenLight.style.backgroundColor = "green";
    RedLight.style.backgroundColor = "grey";
    OrangeLight.style.backgroundColor = "grey";


}




