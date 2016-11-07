window.onload=funtion(){
  document.getElementById("searchCity").addEventListener("submit",function(){
    var city=  document.getElementById("city").value;
    searchCity(city);
  });
}
