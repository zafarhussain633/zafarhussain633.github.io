var countdownVariable;
const NewYearDate = new Date('1 jan 2021');
document.getElementById("startButton").addEventListener("click", Countdown);
document.getElementById("stopButton").addEventListener("click", stopFunction);
document.getElementById("restartButton").addEventListener("click", Countdown);

function Countdown(){
 // updating the below date and time every second
 countdownVariable = setInterval(()=>
{
const CurrentDate = new Date();
const totalSeconds = ((NewYearDate-CurrentDate)/1000); 
const seconds = Math.floor(totalSeconds%60);
const minuts = Math.floor((totalSeconds/60)%60);
const hours = Math.floor(((totalSeconds/60)/24)%24);
const days = Math.floor((((totalSeconds/60)/60))/24);

//targeting the css element
document.getElementById("day").innerHTML= days;
document.getElementById("hour").innerHTML = hours;
document.getElementById("minut").innerHTML = minuts;
document.getElementById("second").innerHTML = seconds;
document.getElementById("second").style.color = "red";
document.getElementById("startButton").style.display = "none";
document.getElementById("stopButton").style.display = "inline";
document.getElementById("restartButton").style.display = "inline";
} , 1000);
}

function stopFunction()
{
    clearInterval(countdownVariable);
    
}
