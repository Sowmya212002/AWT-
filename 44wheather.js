function fetchWeather()
{
    var request=new XMLHttpRequest();
  var city=document.getElementById("temp").value;
// var city='delhi'
  
  var url='http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=60c24cf5cde2336866bf03ace47a5d61&units=metric';
  request.open('GET',url,true);
  request.onload=function(){
      var result=JSON.parse(this.response);
      console.log(result);
      document.getElementById("result").value=result.main.temp;
  }
  request.send();
}
