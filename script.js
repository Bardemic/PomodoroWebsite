const timer = document.querySelector('#timer');
const studyButton = document.querySelector('#studyButton');
const restButton = document.querySelector('#restButton');
const start = document.querySelector('#startButton');
const pause = document.querySelector('#pauseButton');
const svgCircle = document.querySelector('circle');


document.body.classList.add("study-theme");

var timerOn = false;
var isStudyTime = true; //false when it is rest time
var clockInProgress = false;
var studyTimeLength = 5;
var restTimeLength = 2;
var savedStudyTimeLength = studyTimeLength;
var savedRestTimeLength = restTimeLength;
var circleOffset = 450.00;
var circleInterval = 0;
var endInterval = false;

function startTimer(secondsLength, timerDiv){
    clockInProgress = true;
    //circleOffset = 450.00; //450.00 Default
    circleInterval = circleOffset/secondsLength/100;
    let timer = setInterval(function(){
        if(timerOn){        
            let minutes = parseInt(secondsLength / 60, 10);
            let seconds = parseInt(secondsLength % 60, 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            circleOffset -= circleInterval;
            svgCircle.style.strokeDashoffset = circleOffset;
            timerDiv.innerHTML = `${minutes}:${seconds}`;
            console.log(minutes + ' ' + seconds)

            secondsLength -= .01;

            if(secondsLength < 0) {
                clockInProgress = false;
                start.style.display = 'block';
                pause.style.display = 'none';
                resetClock();
                swapModes();
                clearInterval(timer);
            }
        }
        if(endInterval){
            endInterval = false;
            clearInterval(timer);
        }
    }, 10);
}


pause.addEventListener('click', e => {
    timerOn = false;
    start.style.display = 'block';
    pause.style.display = 'none';
});

start.addEventListener('click', e => {
    console.log(clockInProgress);
    timerOn = true;
    start.style.display = 'none';
    pause.style.display = 'block';
    if(isStudyTime && !clockInProgress) startTimer(savedStudyTimeLength, timer, circleOffset);
    else if(isStudyTime && clockInProgress) timerOn = true;
    else if(!isStudyTime && !clockInProgress) startTimer(savedRestTimeLength, timer, circleOffset);
    else timerOn = true;
});

function resetClock(){
    circleOffset=450;
    start.style.display = 'block';
    pause.style.display = 'none';
    savedStudyTimeLength = studyTimeLength;
    savedRestTimeLength = restTimeLength;
}

function swapModes() { //run this function when swapping from study to break or break to study time
    document.body.classList.toggle("rest-theme");
    document.body.classList.toggle("study-theme");
    isStudyTime = !isStudyTime;
}

studyButton.addEventListener('click', () => {
    if(!isStudyTime){
        clockInProgress = false;
        endInterval = true;
        resetClock();
        swapModes();
    }
});

restButton.addEventListener('click', () => {
    if(isStudyTime){
        clockInProgress = false;
        endInterval = true;
        resetClock();
        swapModes();
    }
});