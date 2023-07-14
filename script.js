var timerLength = 25;

function startTimer(secondsLength){
    var timer = setInterval(function(){
        let minutes = parseInt(secondsLength / 60, 10);
        let seconds = parseInt(secondsLength % 60, 10);
        console.log(minutes + " " + seconds)

        if(--secondsLength < 0) {
            clearInterval(timer);
        }
    }, 1000);
}




startTimer(3);