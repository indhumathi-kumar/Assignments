/*js1 file*/

function findCelsius(){

  var fahrenheit = document.getElementById("fahrenheit").value;
  var celsius;

  if(fahrenheit != ''){
    celsius = (fahrenheit-32)*5/9;
    document.getElementById("Result").innerHTML = celsius;
  }
  else{
    document.getElementById("Result").innerHTML = "Please enter the fahrenhit value";
  }
}