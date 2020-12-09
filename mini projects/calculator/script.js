var  calData = [];
const matches = document.querySelectorAll(".btn"); // targeting the buttons
for(const i of matches){  // for iterraing through button and getting display user input
    i.addEventListener("click" ,()=>{
       calData.push(i.innerHTML)
       document.querySelector("h1").innerHTML = calData.join("");

       calculateSubInput();

     });
} 

// event for = button 
document.querySelector(".equalButton").addEventListener("click" ,calculateInput);
function calculateInput(){
    const inuputCalculate = calData.join("");
    document.querySelector("h1").innerHTML= calculate(inuputCalculate);
    document.querySelector("span").innerHTML= ""; 
}

// fucniton for displaying instant result.
function calculateSubInput(){
    const inuputCalculate2 = calData.join("");
    document.querySelector("span").innerHTML= calculate(inuputCalculate2);
}

// for refereshing and clear the screen 
document.querySelector(".clearButton").addEventListener("click" ,()=> {
    calData=[];
    document.querySelector("h1").innerHTML = "";
    document.querySelector("span").innerHTML= "";
});



//funtion for calculation
function calculate(num){
    return eval(num);
}


//funtion for button animatin 
var buttonAnimaion= ()=>{
   const seclectedButton = document.querySelectorAll("button")
   for(let item of seclectedButton){
       item.addEventListener("click", ()=>{
           item.classList.add("animation");
           setTimeout(() => {
               item.classList.remove("animation");
           }, 400);
       })
   }
}
buttonAnimaion();
// end of button animatin 


//code for light mode 
document.querySelector("p").addEventListener("click",()=>{
    for(let item of matches){
        item.style.cssText = "background:  rgba(39, 39, 39, 0.24); color: black; border:1px solid white  "
    }
    document.querySelector(".result-area").style.cssText ="background-color:white; box-shadow: inset 0px 0px 25px 15px rgba(39, 39, 39, 0.24);"
    document.querySelector("h1").style.cssText ="color:crimson;"
    document.querySelector("span").style.cssText ="color:#393e46;"
    document.querySelector(".clearButton").style.cssText="background-color: #7579e7; color:white;"
    document.querySelector(".equalButton").style.cssText="background-color: #fd3a69;"
    document.querySelector(".devide").style.cssText="color: red; background: rgba(39, 39, 39, 0.24); border:1px solid white "
    document.querySelector(".multiply").style.cssText="color: red; background: rgba(39, 39, 39, 0.24); border:1px solid white "
    document.querySelector(".subtract").style.cssText="color: red; background: rgba(39, 39, 39, 0.24); border:1px solid white "
    document.querySelector(".add").style.cssText="color: red; background: rgba(39, 39, 39, 0.24); border:1px solid white "
    document.querySelector(".container").style.cssText=" box-shadow: inset 0px 0px 5px 19px grey"
    document.querySelector("p").innerHTML ="refresh the page for Dark-Mode";

})


    
    
