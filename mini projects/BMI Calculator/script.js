function userInput() {
    var a;
    const kg = document.getElementById("weight-kg")
    const lbs = document.getElementById("weight-lbs")
    const cm = document.getElementById("height-cm")
    const foot = document.getElementById("height-foot")

    document.querySelector("#weight").addEventListener("input", () => {
        a = document.getElementById("weight").value;
        kg.innerText = a;
        lbs.innerText = Math.floor(a * 2.20462);
    });

    document.querySelector("#height").addEventListener("input", (event) => {
        heightIncm = event.target.value;
        cm.innerText = heightIncm;
        foot.innerText = `${Math.floor(heightIncm * 0.0328084)}" ${Math.round((heightIncm * 0.0328084 * 12) % 12)}'`;
         
    })
    showResult(kg, cm);
}

function showResult(x, y) {
    document.addEventListener("input", () => {
        let w = x.innerText; // weight in kg 
        let h = y.innerText;  // height in cm 
        const result = Math.round(w / (h/100)**2);
        document.getElementById("finalResult").innerHTML = "Your Bmi is "+ result+" kg/m<sup>2</sup>";
        document.querySelector(".pointer_child1").innerHTML=result +" kg/m<sup>2</sup>";
        
        if(result>1 && result<=18){
        document.getElementById("pointer_result").style.marginLeft=`${result+1}%`;
        }
        else if(result==19){
            document.getElementById("pointer_result").style.marginLeft=`${result+3}%`;
        }
        else if(result==20){
            document.getElementById("pointer_result").style.marginLeft=`${result+6}%`;
        }else if(result==21){
            document.getElementById("pointer_result").style.marginLeft=`${result+9}%`;
        }else if(result==22){
            document.getElementById("pointer_result").style.marginLeft=`${result+12}%`;
        }else if(result==23){
            document.getElementById("pointer_result").style.marginLeft=`${result+15}%`;
        }else if(result==24){
            document.getElementById("pointer_result").style.marginLeft=`${result+15}%`;
        }else if(result==25){
            document.getElementById("pointer_result").style.marginLeft=`${result+15}%`;
        }else if(result>25 && result<=40){
            document.getElementById("pointer_result").style.marginLeft=`${result+20}%`;
        }else if(result>40 && result<65){
            document.getElementById("pointer_result").style.marginLeft=`${result+25}%`;
        }else if(result>65 && result<=75){
            document.getElementById("pointer_result").style.marginLeft=`${result+25}%`;
        }else if(result>100){
            document.getElementById("pointer_result").style.marginLeft=`${100}%`;
        } 
    })
}
userInput();
