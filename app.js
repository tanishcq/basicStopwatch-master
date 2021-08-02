let hr = document.getElementById('hrs');
let min = document.getElementById('mins');
let sec = document.getElementById('secs');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let interval;

let stop = () => {
    clearInterval(interval);
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

let start = () => {
    let hrs = parseInt(hr.value);
    let mins = parseInt(min.value);
    let secs = parseInt(sec.value);
    if(isNaN(hrs))
        hrs = 0;
        
    if(isNaN(mins))
        mins = 0;

    if(isNaN(secs))
        secs = 0;

    if(secs>60){
        var a = parseInt(secs%60);
        var b = parseInt(secs/60);
        sec.value = a;
        mins = mins + b;
        min.value = mins;
    }
    if(mins>60){
        var x = parseInt(mins%60);
        var y  = parseInt(mins/60);
        min.value = x;
        hrs = hrs + y;
        hr.value = hrs;
    }
    interval = setInterval(()=>{
        if(sec.value!=0){
            sec.value = parseInt(sec.value)-1;
        }
        else{
            if(min.value!=0){
                min.value = parseInt(min.value)-1;
                sec.value = 59;
            }
            else{
                if(hr.value!=0){
                    hr.value = parseInt(hr.value)-1;
                    min.value = 59;
                } 
                else{
                    stop();
                }
            }
        }
    },1000);
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

let reset = () =>{
    sec.value = "";
    min.value = "";
    hr.value = "";
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

