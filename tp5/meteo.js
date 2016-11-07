window.onload=function(){
	document.getElementById("searchCity").addEventListener("submit",function(event){
		event.preventDefault();
		var city=document.getElementById("city").value;
		console.log(city);
		searchCity(city);
	});
}

function searchCity(_city){
  console.log(searchCity, 'Hello from' +_city);
  var request = new XMLHttpRequest()
  request.open('GET','http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=84b1ad7d5c74af6f4a273abe6e580333',true);


  request.onload = function(){
     if (request.status >=200 && request.status < 400) {
        //Sucess!
       var responseJSON = JSON.parse(request.responseText);
       
       var temp = responseJSON.weather.main;
       var humidity = responseJSON.main.humidity;
       var cloud = responseJSON.cloudiness; 
       var wind = responseJSON.wind.speed; 
	var icon = responseJSON.weather[0].icon;      
       
     
       
      // document.getElementById('icon').src ="http://openweathermap.org/img/w/"+icon+".png";
       document.getElementById('result2').innerHTML =temp;
       document.getElementById('result3').innerHTML =humidity;
       document.getElementById('result4').innerHTML =cloud;
       document.getElementById('result5').innerHTML =wind;
    
       
}else{
}
  };
request.onerror=function(){
};
  request.send();
}





function searchLatLng(_lat, _Ing){
   console.log(searchLatLng, 'Hello from' +_lat+','+_Ing);
}
