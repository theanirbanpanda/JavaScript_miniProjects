const APIkey="aba6ff9d6de967d5eac6fd79114693cc";
const city=document.getElementById("inputtext");
const btn=document.getElementById("searchbtn");
btn.addEventListener("click",async ()=>{
    
const res=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city?.value+"&appid="+APIkey);

if (res.status===404 ||res.status===400) {
    document.getElementById("errormessage").style.display='block';
    document.getElementById("weatherinfo").style.display='none';
   
    
} 

else {
     
const data=await res.json();
console.log(data);
document.getElementById("weatherinfo").style.display='block';
document.getElementById("cityname").innerText=data?.name;
document.getElementById("humidity").innerText=data?.main?.humidity+"%";
document.getElementById("temp").innerText=data?.main?.temp+"℉";
document.getElementById("wind").innerText=data?.wind?.speed+"km/h";
const weatherstatus=data['weather'][0]['description'];
if (weatherstatus==='overcast clouds') {
    document.getElementById("weathericon").src="/images/clouds.png"

    
} 
if (weatherstatus==='haze') {
    document.getElementById("weathericon").src="/images/mist.png"

    
} 
if (weatherstatus==='scattered clouds') {
    document.getElementById("weathericon").src="/images/rain.png"

    
} 
if (weatherstatus==='clear sky') {
    document.getElementById("weathericon").src="/images/clear.png"

    
} 
if (weatherstatus==='mist') {
    document.getElementById("weathericon").src="/images/mist.png"

    
} 
if (weatherstatus==='snow') {
    document.getElementById("weathericon").src="/images/snow.png"

    
}      
    }
   
 


});
