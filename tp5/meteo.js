window.onload=function(){
  document.getElementById("searchCity").addEventListener("submit",function(){
    var city=  document.getElementById("city").value;
    searchCity(city);
  });
}


function searchCity(_city){
   console.log(searchCity, 'Hello from' +_city);
  var request = new XMLHttpRequest()
  request.open('GET','http://api.openweathermap.org/data/2.5/weather?q=’+_city+’&appid=84b1ad7d5c74af6f4a273abe6e580333',true);

  
  request.onload = function(){
     if (request.status >=200 && request.status < 400) {
        //Sucess!
       
       
       var responseJSON = JSON.parse(request.responseText);
        var nom = responseJSON.name
