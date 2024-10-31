const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const mili = document.querySelector('.mili');
const pause = document.querySelector('.pause');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

let time = 0;
let key;

let startTimer = ()=>{
    start.disabled = true;
    key = setInterval(()=>{
        time = time+ 1;

        let milliseconds = time % 100 ; 
        let seconds = Math.floor((time / 100) % 60);
        let minutes = Math.floor((time / (100 * 60)) % 60);
        let hours = Math.floor((time / (100 * 60 * 60)) % 24);

        mili.innerHTML = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
        sec.innerText = seconds < 10 ? `0${seconds}` : seconds;
        min.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        hour.innerHTML = hours < 10 ? `0${hours}` : hours;

    },10)

}

let pauseTimer = ()=>{
    clearInterval(key)
    start.disabled = false;
}

let resetTimer = ()=>{
    mili.innerHTML = '00';
    sec.innerHTML = '00';
    min.innerHTML = '00';
    hour.innerHTML = '00';
    pauseTimer();
    time = 0;
}

start.addEventListener('click', ()=>startTimer())
pause.addEventListener('click', ()=>pauseTimer())
reset.addEventListener('click', ()=>resetTimer())