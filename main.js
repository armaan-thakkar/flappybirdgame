const hole = document.getElementById("hole");
var jumping = 0;
var result = document.getElementById("result");
var text = document.getElementById("text");
var game = document.getElementById("game");
var score =0;

hole.addEventListener("animationiteration", holes)

function holes() {

    var random = -((Math.random()*350) +150)
    hole.style.top = random + "px";
    score++;
    console.log(score++);
}


var fall = setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping==0){bird.style.top= (birdTop+2) + "px"}
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    var holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
    var htop = (500 + holetop)
    if((birdTop > 450) || ((blockleft<50)&& (blockleft > -50) && ((birdTop < htop) || (birdTop > htop + 100 )))){
        result.style.display="block";
        text.innerHTML = `score : ${score}`;
        game.style.display="none"
        score = 0;

    }
},10)
//jump 


function jump(){
    jumping= 1;
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top")); 
    bird.style.top= (birdTop-60) + "px";
    setTimeout(function(){
        jumping = 0 ;
    },100)
}
window.addEventListener('keydown',jump)