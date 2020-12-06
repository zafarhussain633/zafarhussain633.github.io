
  const diceSelector =  document.querySelectorAll("img");
  var headingSelector = document.querySelector("h1");
   
   window.addEventListener("click" , ()=>{

    let RandomNumberForDice1 = Math.ceil(Math.random()*6);
    let RandomNumberForDice2 = Math.ceil(Math.random()*6);
    
    diceSelector[0].src = `images/${RandomNumberForDice1}.PNG`;
    diceSelector[1].src = `images/${RandomNumberForDice2}.PNG`;


    if(RandomNumberForDice1 > RandomNumberForDice2) {
    headingSelector.innerHTML ="<span style='color:#32CD32'>Woo Player 1 Won</span>";
    } else if(RandomNumberForDice1 < RandomNumberForDice2){
    headingSelector.innerHTML ="<span style='color:#32CD32'>Woo Player 2 Won</span>";
    }else{
        headingSelector.innerHTML ="<span style='color:#32CD32'>Draw Try Again</span>";
    }
});


