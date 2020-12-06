
  const diceSelector =  document.getElementById("dice-image");
   
    diceSelector.addEventListener("click" , ()=>{

    var number = Math.ceil(Math.random()*6);
    console.log(number);
  
    if(number==1){
        diceSelector.src= "images/1.PNG";
    }else if(number===2){
        diceSelector.src= "images/2.PNG"
    }else if(number==3){
        diceSelector.src= "images/3.PNG"
    }else if(number===4){
        diceSelector.src= "images/4.PNG"
    }else if(number===5){
        diceSelector.src= "images/5.PNG"
    }else if(number===6){
        diceSelector.src= "images/6.PNG"
    }
})

