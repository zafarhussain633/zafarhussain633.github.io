
function updateTime(){
    setInterval(() => {
    //for getting the date   
    const date = new Date();
    const second = date.getSeconds();
    const minut = date.getMinutes();
    const hour = date.getHours();

    //converting value into degree for rotate
    const displaySecond = -90+second*6; // for moving 6 dgree every time 
    const displayMinut = -90+minut*6;
    const displayHour = -90+(hour-12)*30  
    displayTime(".second", displaySecond);  // calling fucntion for display and rotate watch hand
    displayTime(".minut" ,displayMinut);
    displayTime(".hour" , displayHour);
    }, 1000);
    
}
function displayTime(className ,displayProp){
    document.querySelector(className).style.transform = `rotate(${displayProp}deg)`;
}

updateTime();  // calling setinterval for updating time every second








