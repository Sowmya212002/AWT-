function Rating()
{
    var request=new XMLHttpRequest();
  var city=document.getElementById("temp").value;
// var movie='rrr'
  
  var url='https://imdb-api.com/en/API/Top250Movies/k_12345678'+movie
  request.open('GET',url);
  request.onload=function(){
      var result=JSON.parse(this.response);
      console.log(result);
      document.getElementById("result").value=result.main.temp;
  }
  request.send();
}
