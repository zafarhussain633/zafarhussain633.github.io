let userLocation = document.getElementById("userLocation");
let UserCityName = document.getElementById("cityName");
let result= document.getElementById("result");

userLocation.addEventListener("click",getLocation)
document.addEventListener("keyup",(event)=>{
    if(event.keyCode==13){  //get result by hiting enter
        loadWithCityName()
    }
})


getLocation() // calling for auto getting location if location enable already
let APIKey = "42bd6f37bbd470ffeb73c17cf3a58896";

//with city name 
 function loadWithCityName(){
 let cityName = UserCityName.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`)
                    .then(res=>res.json())
                    .then(data=>{
                     const temperature =  Math.round((data.main.temp)-273.15)
                     const city =data.name;
                     const country = data.sys.country;
                     const icon = `http://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`
                     const desc = data.weather[0].description;
                     display(temperature,city,country,icon,desc);
                    }).catch(err=>{
                        alert("please input valid City Name" + err)
                    })

}


//getting ocation from lattitude and longitude
 function getLocation(){
    let lon , lat; 
    navigator.geolocation.getCurrentPosition(pos=>{
        lon= pos.coords.longitude;
        lat= pos.coords.latitude
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`)
        .then(res=>res.json())
        .then(data=>{
            const temperature =  Math.round((data.main.temp)-273.15)
            const city =data.name;
            const country = data.sys.country;
            const icon = `http://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`
            const desc = data.weather[0].description;
            display(temperature,city,country,icon,desc);
            console.log(temperature,city,country,icon,desc)
        })
    },
    ()=>{
        alert("Please Turn on you location")
    })

}


function display(temp,city,country,icon,desc){
  const weeks = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const months=["jan","Fab","March","April","may","june","july","Aug","sep","oct","Nov","Dec"]
  let date =new Date();
  result.innerHTML = `${temp}`
  document.getElementById("DispCity").innerHTML = `${city}`;
  document.getElementById("Dispcountry").innerHTML=country;
  document.getElementById("icon").setAttribute("src",icon);
  document.getElementById("desc").innerHTML=desc;
  document.getElementById("date").innerHTML= `${weeks[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

