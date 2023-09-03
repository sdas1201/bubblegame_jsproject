function savebubble(){
    var save = "";

for(var i=1 ;i<=60 ;i++){
    var rn = Math.floor(Math.random()*10);
    save += `<div class="elem">${rn}</div>`;
}

var a = document.querySelector("#maintab-bottom");
a.innerHTML= save;
}

var timer =60;
function time(){
    setInterval(() => {
       if(timer>0){
        timer=timer-1;
        var ti = document.querySelector("#time-interval");
        ti.textContent=timer;
       }else{
        clearInterval(ti);
        document.querySelector("#maintab-bottom").innerHTML="";
       }
    }, 1000);
}
var hr=0;
function hit(){
     hr = Math.floor(Math.random()*10);
    var b = document.querySelector("#hit");
    b.textContent = hr; 
}

var c=0;
function increaseScore(){
    var scr = document.querySelector("#score");
    scr.textContent=c;
    c += 10;
}

document.querySelector("#maintab-bottom").addEventListener("click",
function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum===hr){
        increaseScore();
        savebubble();
        hit();
    }
})

time();
savebubble();
hit();
increaseScore();