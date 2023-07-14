const progressBar = document.querySelector('#timeLeftProgress');
const timer = document.querySelector('#timer');
const start = document.querySelector('#startPause');


var studyTimeLength = 25;
var restTimeLength = 5;


function startTimer(secondsLength, timerDiv){
    progressBar.max = secondsLength;
    var timer = setInterval(function(){
        let minutes = parseInt(secondsLength / 60, 10);
        let seconds = parseInt(secondsLength % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        progressBar.value++;
        timerDiv.innerHTML = `${minutes}:${seconds}`;
        console.log(minutes + ' ' + seconds)

        if(--secondsLength < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

start.addEventListener('click', e => {
    startTimer(studyTimeLength, timer);
});


