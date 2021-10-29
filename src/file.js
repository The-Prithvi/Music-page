var count = 1;
setInterval(function(){
    document.getElementById('r' + count).checked = "true";
    count++;
    if(count>6){
        count = 1;
    }
},5000);

function displayPlayer(){
    document.getElementById("player").style.display = "block";
}

var n;
let r;
let p;
let isplaying = false;
function song(control){
    if(isplaying == true){
    p.pause();
    }
    n = document.getElementById(control.id).id;
    r = n[n.length-1];
    p = new Audio(`./src/songs/${r}.mp3`);
    p.play();
    isplaying = true;
}

function pausebt(){
    p.pause();
    document.getElementById("play").style.display = "block";
    document.getElementById("pause").style.display = "none";
}
function playbt(){
    p.play();
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "block";
}
function songNameChanger(){
    document.getElementById("songName").innerHTML = document.getElementById("tp1").querySelector(p).innerHTML;
}

