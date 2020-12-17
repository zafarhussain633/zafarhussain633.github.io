var count = 0;
var temp ;
var audio = new Audio("tada.mp3")
const getDiv = document.querySelectorAll(".main>div");

    for(let i of getDiv){
        i.addEventListener("click" , ()=>{
           fill(i);
           temp = i.innerHTML;
           checkResult();
           
        
        })
    }

function fill(input){
    if(count<9) {
    if(count%2==0){
        input.innerHTML = '0'
    }else{
        input.innerHTML = "X"
        input.style.color = "red";
    }
    count++;
}else{
    alert("match draw")
    reset();
}

}   

function checkResult(){
    if(target(".div1")===temp && target(".div2")===temp && target(".div3")===temp ||
       target(".div1")===temp && target(".div4")===temp && target(".div7")===temp ||
       target(".div1")===temp && target(".div5")===temp && target(".div9")===temp ||
       target(".div2")===temp && target(".div5")===temp && target(".div8")===temp ||
       target(".div3")===temp && target(".div5")===temp && target(".div7")===temp ||
       target(".div3")===temp && target(".div6")===temp && target(".div9")===temp ||
       target(".div4")===temp && target(".div5")===temp && target(".div6")===temp ||
       target(".div7")===temp && target(".div8")===temp && target(".div9")===temp ) {
       document.querySelector("h1").innerHTML = `${temp} Won`
       document.querySelector("h1").classList.add("animation");
       audio.play();

    }
}    

function target(input){
   return  document.querySelector(input).innerHTML;
}

var reset = ()=> {
   window.location.reload();
}

document.querySelector(".refresh").addEventListener("click" ,()=>{
    reset();
});