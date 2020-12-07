

const selector = document.querySelectorAll(".drum-box");
for(const item of selector){
    item.addEventListener("click" ,()=>{
        makeSound(item.innerHTML);
        drumAnimation(item.innerHTML)
    })
}

// Funtion for keypresss 
 document.addEventListener("keypress" , (event)=>{
     makeSound(event.key);
     drumAnimation((event.key).toUpperCase());
 });


 function makeSound(input){
 if(input)
 var sound = new Audio(`sound/${input}.mp3`);
 sound.play();
 }

// FUCNTION FOR animation in button 
function drumAnimation(input){
    var temp = document.querySelector(`.${input}`);
    temp.classList.add("drumAnimation");
    setTimeout(()=>temp.classList.remove("drumAnimation"),500) 
}

