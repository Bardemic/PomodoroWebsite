const progressBar = document.querySelector("#timeLeftProgress");


var timerLength = 25;

function startTimer(secondsLength){
    progressBar.max = secondsLength;
    var timer = setInterval(function(){
        let minutes = parseInt(secondsLength / 60, 10);
        let seconds = parseInt(secondsLength % 60, 10);
        progressBar.value++;
        console.log(minutes + " " + seconds)

        if(--secondsLength < 0) {
            clearInterval(timer);
        }
    }, 1000);
}




startTimer(timerLength);