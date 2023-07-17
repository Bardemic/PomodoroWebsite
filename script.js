const timer = document.querySelector('#timer');
const start = document.querySelector('#startButton');
const pause = document.querySelector('#pauseButton');
const svgCircle = document.querySelector('circle');

var isStudyTime = true; //false when it is rest time
var studyTimeLength = 25;
var restTimeLength = 5;
var savedStudyTimeLength = studyTimeLength;
var offset = 450.00;

function startTimer(secondsLength, timerDiv, circleOffset){
    //circleOffset = 450.00; //450.00 Default
    let circleInterval = circleOffset/secondsLength/100;
    pause.addEventListener('click', e => {
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
            clearInterval(timer);
        }
    }, 10);
}

start.addEventListener('click', e => {
    startTimer(savedStudyTimeLength, timer, offset);
});


