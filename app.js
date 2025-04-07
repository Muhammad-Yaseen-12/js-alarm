// console.log(moment().format('MMMM Do YYYY, hh:mm:ss a'));
// console.log(moment().format('MMMM Do YYYY, HH:mm:ss a'));
// function abc(){


setInterval(function () {
    let curTime = moment().format('h:mm:ss A')
    let ptime = document.getElementById("ptime");
    ptime.innerHTML = curTime;

    let timeval = document.getElementById('timeval');
    // if (timeval.value === "") {


    // } else {
    //     console.log(timeval.value);

    // }

    let inputTime = moment(timeval.value, 'h:mm:ss A').format('h:mm:ss A');
    

    if (inputTime === curTime) {
        let audio = new Audio('bedside-clock-alarm-95792.mp3');
        audio.loop = true;
        audio.play();


    }
}, 1000)
