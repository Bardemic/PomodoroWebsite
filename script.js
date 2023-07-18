const timer = document.querySelector('#timer');
const studyButton = document.querySelector('#studyButton');
const resetButton = document.querySelector('#resetButton');
const start = document.querySelector('#startButton');
const pause = document.querySelector('#pauseButton');
const svgCircle = document.querySelector('circle');


document.body.classList.add("study-theme");

var isStudyTime = true; //false when it is rest time
var studyTimeLength = 5;
var restTimeLength = 2;
var savedStudyTimeLength = studyTimeLength;
var savedRestTimeLength = restTimeLength;
var offset = 450.00;

function startTimer(secondsLength, timerDiv, circleOffset){
    //circleOffset = 450.00; //450.00 Default
    let circleInterval = circleOffset/secondsLength/100;
    pause.addEventListener('click', e => {
        start.style.display = 'block';
        pause.style.display = 'none';
        savedStudyTimeLength = secondsLength;
        offset = circleOffset;
        console.log(offset);
        clearInterval(timer);
    });
    var timer = setInterval(function(){
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
            start.style.display = 'block';
            pause.style.display = 'none';
            notActive();
            clearInterval(timer);
        }
    }, 10);
}

start.addEventListener('click', e => {
    start.style.display = 'none';
    pause.style.display = 'block';
    if(isStudyTime) {
        startTimer(savedStudyTimeLength, timer, offset);
    }
    else {
        startTimer(savedRestTimeLength, timer, offset);
    }
});

function notActive(){
    swapModes();
    savedStudyTimeLength = studyTimeLength;
    savedRestTimeLength = restTimeLength;
}

function swapModes() { //run this function when swapping from study to break or break to study time
    if(isStudyTime){ //is true when trying to go from study time to rest time, will set to false after running code
    }
    else {
    }
    document.body.classList.toggle("rest-theme");
    document.body.classList.toggle("study-theme");
    isStudyTime = !isStudyTime;
}

