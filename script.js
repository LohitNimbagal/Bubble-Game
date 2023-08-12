var timer = 60;
var score = 0;
var hitrn = 0;

function getNewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitValue").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";

    for (var i = 0; i <= 101; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pmid").innerHTML = clutter;
}

function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerValue').textContent = timer;
        } else {
            clearInterval(timer);
            document.querySelector("#pmid").innerHTML = `<h1>GAME OVER <br />Your score is <strong>${score}<strong></h1>`;
            // reset();
        }
    }, 1000);
}

function incScore() {
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}

document.querySelector("#pmid").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        incScore();
        getNewhit();
        makeBubble();
    }
    
})

function reset() {
        // document.querySelector("#pmid").innerHTML = "<button>Reset</button>";
        document.querySelector("button").addEventListener("click", function (dets) {
        location.reload()
    })
}

getNewhit();
runTimer();
makeBubble();
reset();
 