var timer = 60;
var score = 0;
 var hitrn = 0; 



function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;

} 



function getHit(){
 hitrn = Math.floor(Math.random()*10)
  document.querySelector("#hitval").textContent = hitrn;
}


function runTimer (){
    var timeCount = setInterval(function(){
      if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
      }
      else{
        clearInterval(timeCount);
        document.querySelector(".ptb").innerHTML = `<h1>Game Over`
      }
    
  },1000)
}



function makeBubble(){
  var clutter = "";
for(var i = 1; i<180; i++){
   var random = Math.floor(Math.random()*10)
clutter +=  ` <div class="bubble">${random}</div>`;
}
document.querySelector(".ptb").innerHTML = clutter;
}
document.querySelector(".ptb").addEventListener("click",function(dets){
var clickedNumber = Number(dets.target.textContent);
if(clickedNumber === hitrn){
  increaseScore();
  makeBubble();
  getHit();
}
})
getHit();
runTimer();
makeBubble();









